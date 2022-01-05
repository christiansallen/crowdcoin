import React, { useState } from "react";
import { Form, Input, Message, Button } from "semantic-ui-react";
import Campaign from "../ethereum/campaign";
import web3 from "../ethereum/web3";
import { useRouter } from "next/router";

const ContributeForm = ({ campaignAddress }) => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const onSubmit = async (e) => {
    setLoading(true);
    setErrorMessage("");
    e.preventDefault();
    const campaign = Campaign(campaignAddress);
    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(value, "ether"),
      });
      // refreshes page to current page without adding it to browser history.
      refreshData();
    } catch (err) {
      setErrorMessage(err.message);
    }
    setLoading(false);
    setValue("");
  };
  return (
    <Form onSubmit={onSubmit} error={!!errorMessage}>
      <Form.Field>
        <label>Amount to Contribute</label>
        <Input
          label="ether"
          labelPosition="right"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Form.Field>
      <Message error heading="Oops!" content={errorMessage} />
      <Button primary loading={!!loading}>
        Contribute!
      </Button>
    </Form>
  );
};

export default ContributeForm;
