import React, { useState } from "react";
import { Form, Message, Input, Button } from "semantic-ui-react";
import Campaign from "../../../../ethereum/campaign";
import web3 from "../../../../ethereum/web3";
import { useRouter } from "next/router";
import Link from "next/link";

const RequestNew = ({ query }) => {
  const router = useRouter();
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [recipient, setRecipient] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { campaignAddress } = query;

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    const campaign = Campaign(campaignAddress);
    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods
        .createRequest(description, web3.utils.toWei(value, "ether"), recipient)
        .send({
          from: accounts[0],
        });
      router.push(`/campaigns/${campaignAddress}/requests`);
    } catch (err) {
      setErrorMessage(err.message);
    }
    setLoading(false);
  };

  return (
    <div>
      <Link href={`/campaigns/${campaignAddress}/requests`}>
        <a>Back</a>
      </Link>
      <h3>Create a Request</h3>
      <Form onSubmit={onSubmit} error={!!errorMessage}>
        <Form.Field>
          <label>Description</label>
          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Value in Ether</label>
          <Input value={value} onChange={(e) => setValue(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Recipient</label>
          <Input
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />
        </Form.Field>
        <Message error content={errorMessage} header="Oops!" />
        <Button primary loading={!!loading}>
          Create!
        </Button>
      </Form>
    </div>
  );
};
export default RequestNew;

export async function getServerSideProps(context) {
  return { props: { query: context.query } };
}
