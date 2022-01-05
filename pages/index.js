// index.js is the root file for next.js projects.
import React, { useState, useEffect } from "react";
import factory from "../ethereum/factory";
import { Card, Button } from "semantic-ui-react";
import Link from "next/link";

const CampaignIndex = ({ campaigns }) => {
  const renderCampaigns = () => {
    const items = campaigns.map((campaign) => {
      return {
        header: campaign,
        description: (
          <Link href={`/campaigns/${campaign}`}>
            <a>Go to campaign address</a>
          </Link>
        ),
        fluid: true,
      };
    });

    return <Card.Group items={items} />;
  };

  // CSR version. SSR is available through Next.js
  // useEffect(() => {
  //   const fetchCampaigns = async () => {
  //     let campaigns = await factory.methods.getDeployedCampaigns().call();
  //     console.log(campaigns);
  //   };
  //   fetchCampaigns();
  // }, []);

  return (
    <div>
      <h3>Open Campaigns</h3>
      <Link href={`/campaigns/new`}>
        <Button
          floated="right"
          content="Create Campaign"
          icon="add circle"
          primary
        />
      </Link>
      {renderCampaigns()}
    </div>
  );
};

// SSR data loading. Much quicker than CSR.
// Use getServerSideProps instead. getInitialProps is deprecated. See campaignAddress -> index.js
CampaignIndex.getInitialProps = async () => {
  const campaigns = await factory.methods.getDeployedCampaigns().call();
  return { campaigns };
};

export default CampaignIndex;
