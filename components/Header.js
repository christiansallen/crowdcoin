import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <Menu style={{ marginTop: "10px" }}>
      <Menu.Item name="name" onClick={() => router.push("/")}>
        CrowdCoin
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item name="campaigns" onClick={() => router.push("/")}>
          Campaigns
        </Menu.Item>

        <Menu.Item
          name="addCampaign"
          onClick={() => router.push("/campaigns/new")}
        >
          +
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
