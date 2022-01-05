import React, { useState, useEffect } from "react";
import { Card, Grid, Button } from "semantic-ui-react";
import Campaign from "../../../ethereum/campaign";
import web3 from "../../../ethereum/web3";
import ContributeForm from "../../../components/ContributeForm";
import Link from "next/link";

const CampaignShow = (props) => {
  const campaignAddress = props.campaignAddress;
  const [summary, setSummary] = useState(props.summary);

  const renderCards = () => {
    const {
      minimumContribution,
      balance,
      requestsCount,
      approversCount,
      manager,
    } = summary;
    const items = [
      {
        header: manager,
        meta: "Address of manager",
        description:
          "The manager created this campaign and can create requests to withdraw money.",
        style: { overflowWrap: "break-word" },
      },
      {
        header: minimumContribution,
        meta: "Minimum Contribution (wei)",
        description:
          "You must contribute at least this much wei to become an approver.",
        style: { overflowWrap: "break-word" },
      },
      {
        header: requestsCount,
        meta: "Number of Requests",
        description:
          "A request tries to withdraw money from the contract. Requests must be approved by approvers.",
        style: { overflowWrap: "break-word" },
      },
      {
        header: approversCount,
        meta: "Number of Approvers",
        description:
          "Number of people who already have donated to this campaign.",
        style: { overflowWrap: "break-word" },
      },
      {
        header: web3.utils.fromWei(balance, "ether"),
        meta: "Campaign Balance (ether)",
        description:
          "The balance is how much money this campaign has left to spend.",
        style: { overflowWrap: "break-word" },
      },
    ];

    return <Card.Group items={items} />;
  };

  return (
    <div>
      <h1>Campaign Details</h1>
      <Grid>
        <Grid.Row>
          <Grid.Column width={10}>{renderCards()}</Grid.Column>
          <Grid.Column width={6}>
            <ContributeForm campaignAddress={campaignAddress} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Link href={`/campaigns/${campaignAddress}/requests`}>
              <a>
                <Button primary> View Requests </Button>
              </a>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default CampaignShow;

export async function getServerSideProps(context) {
  const campaignAddress = context.query.campaignAddress;
  const campaign = Campaign(campaignAddress);
  const summary = await campaign.methods.getSummary().call();
  return {
    props: {
      campaignAddress,
      summary: {
        minimumContribution: summary[0],
        balance: summary[1],
        requestsCount: summary[2],
        approversCount: summary[3],
        manager: summary[4],
      },
    },
  };
}
