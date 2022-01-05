import React, { useState } from "react";
import { Form, Button, Input, Message } from "semantic-ui-react";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import Router from "next/router";

const CampaignNew = () => {
  const [minimumContribution, setMinimumContribution] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods.createCampaign(minimumContribution).send({
        from: accounts[0],
      });
      Router.push("/");
    } catch (err) {
      setErrorMessage(err.message);
    }
    setLoading(false);
  };
  return (
    <div>
      <h3>Create a Campaign</h3>
      <Form onSubmit={onSubmit} error={!!errorMessage}>
        <Form.Field>
          <label>Minimum Contribution</label>
          <Input
            label="wei"
            labelPosition="right"
            value={minimumContribution}
            onChange={(e) => setMinimumContribution(e.target.value)}
          />
        </Form.Field>
        <Message error content={errorMessage} header="Oops!" />
        <Button loading={loading} primary content="Create!" />
      </Form>
    </div>
  );
};

export default CampaignNew;
