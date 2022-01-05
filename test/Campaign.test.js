const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");

const web3 = new Web3(ganache.provider());
const compiledFactory = require("../ethereum/build/CampaignFactory.json");
const compiledCampaign = require("../ethereum/build/Campaign.json");

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: "1000000" });

  // .send and .call for sending a txn or calling a txn.
  await factory.methods.createCampaign("100").send({
    from: accounts[0],
    gas: "1000000",
  });

  [campaignAddress] = await factory.methods.getDeployedCampaigns().call();

  //difference between this deployment and the factory deployment, is that this deployment already has an address whereas factory did not.
  campaign = await new web3.eth.Contract(
    JSON.parse(compiledCampaign.interface),
    campaignAddress
  );
});

describe("Campaigns", () => {
  it("deploys a factory and a campaign", () => {
    assert.ok(factory.options.address);
    assert.ok(campaign.options.address);
  });

  it("checks if caller is campaign manager", async () => {
    // manager() is not a method we created. any public variable has a call() attached to it.
    const manager = await campaign.methods.manager().call();
    assert.equal(accounts[0], manager);
  });

  it("allows people to contribute money and marks them as approvers", async () => {
    // accounts[1] comes from ganache. ganache comes with 10 preset accounts.
    await campaign.methods
      .contribute()
      .send({ value: "200", from: accounts[1] });
    const isContributor = await campaign.methods.approvers(accounts[1]).call();
    assert(isContributor);
  });

  it("requires a minimum contribution", async () => {
    try {
      await campaign.methods
        .contribute()
        .send({ value: "50", from: accounts[1] });
      // assert(false) just a failsafe in case the method above is successful.
      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  it("allows a manager to make a payment request", async () => {
    await campaign.methods
      .createRequest("Buy Batteries", "100", accounts[1])
      .send({
        from: accounts[0],
        gas: "1000000",
      });
    const request = await campaign.methods.requests(0).call();
    assert.equal(request.description, "Buy Batteries");
  });

  it("processes requests", async () => {
    await campaign.methods
      .contribute()
      .send({ value: web3.utils.toWei("10", "ether"), from: accounts[0] });
    await campaign.methods
      .createRequest(
        "My Description",
        web3.utils.toWei("5", "ether"),
        accounts[1]
      )
      .send({
        from: accounts[0],
        gas: "1000000",
      });
    await campaign.methods
      .approveRequest(0)
      .send({ from: accounts[0], gas: "1000000" });
    await campaign.methods
      .finalizeRequest(0)
      .send({ from: accounts[0], gas: "1000000" });
    let balance = await web3.eth.getBalance(accounts[1]);
    balance = web3.utils.fromWei(balance, "ether");
    balance = parseFloat(balance);
    console.log(balance);
    assert(balance > 104);
  });
});
