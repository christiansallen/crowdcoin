import React from "react";
import { Button, Table } from "semantic-ui-react";
import { useRouter } from "next/router";
import Link from "next/link";
import Campaign from "../../../../ethereum/campaign";
import RequestRow from "../../../../components/RequestRow";

const RequestIndex = (props) => {
  const router = useRouter();
  const { campaignAddress } = props.query;
  const { Header, Row, HeaderCell, Body } = Table;

  const renderRows = () => {
    return props.requests.map((request, index) => {
      return (
        <RequestRow
          key={index}
          id={index}
          request={request}
          address={campaignAddress}
          approversCount={props.approversCount}
        />
      );
    });
  };

  return (
    <div>
      <h3>Requests</h3>
      <Link href={`/campaigns/${campaignAddress}/requests/new`}>
        <a>
          <Button primary floated="right" style={{ marginBottom: "10px" }}>
            Add Request
          </Button>
        </a>
      </Link>
      <Table>
        <Header>
          <Row>
            <HeaderCell>ID</HeaderCell>
            <HeaderCell>Description</HeaderCell>
            <HeaderCell>Amount (in ether)</HeaderCell>
            <HeaderCell>Recipient</HeaderCell>
            <HeaderCell>Approval Count</HeaderCell>
            <HeaderCell>Approve</HeaderCell>
            <HeaderCell>Finalize</HeaderCell>
          </Row>
        </Header>
        <Body>{renderRows()}</Body>
      </Table>
      <div>Found {props.requestCount} requests</div>
    </div>
  );
};
export default RequestIndex;

export async function getServerSideProps(context) {
  const campaignAddress = context.query.campaignAddress;
  const campaign = Campaign(campaignAddress);
  const requestCount = await campaign.methods.getRequestsCount().call();
  const approversCount = await campaign.methods.approversCount().call();
  const requests = await Promise.all(
    Array(parseInt(requestCount))
      .fill()
      .map((element, index) => {
        return campaign.methods.requests(index).call();
      })
  );
  // This formatting is required. Fixed this error: Reason: `object` ("[object Object]") cannot be serialized as JSON. Please only return JSON serializable data types.
  const formattedRequests = JSON.parse(JSON.stringify(requests));
  console.log(requests);
  return {
    props: {
      query: context.query,
      requests: formattedRequests,
      requestCount,
      approversCount,
    },
  };
}
