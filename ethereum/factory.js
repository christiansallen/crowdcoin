import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x927a0eD05A7458b432296BB1A3061aDB1CFaE9a0"
);

export default instance;
