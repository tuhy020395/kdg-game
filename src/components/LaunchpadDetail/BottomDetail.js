import React, { useState } from 'react'
import { Tabs } from 'antd';
import 'antd/dist/antd.css';

const BottomDetail = () => {
    const { TabPane } = Tabs;
    function callback(key) {
        console.log(key);
    }
    const contentTabs = (
        <>
            <ul className="list-detail-info-tabs">
                <li>
                    <div className="text-left">
                        Token Swap Time
                    </div>
                    <div className="text-right">
                        9:00 PM Oct 03, 2021 (GMT+07:00)
                    </div>
                </li>
                <li>
                    <div className="text-left">
                        Schedule by Tiers
                    </div>
                    <div className="text-right">
                        <a href="#"><span className="main-color">Click here to see details</span></a>
                    </div>
                </li>
                <li>
                    <div className="text-left">
                        Type
                    </div>
                    <div className="text-right">
                        Claimable
                    </div>
                </li>
                <li>
                    <div className="text-left">
                        Total Raise
                    </div>
                    <div className="text-right">
                        96,990.26 USDT
                    </div>
                </li>
                <li>
                    <div className="text-left">
                        Website
                    </div>
                    <div className="text-right">
                        Website
                    </div>
                </li>
                <li>
                    <div className="text-left">
                        Lock Schedule
                    </div>
                    <div className="text-right">
                        <a href="#"><span className="main-color">View token release schedule</span></a>
                    </div>
                </li>
                <li>
                    <div className="text-left">
                        Token Claim Time
                    </div>
                    <div className="text-right">
                        11:10 PM Oct 04, 2021 (GMT+07:00)
                    </div>
                </li>
                <li>
                    <div className="text-left">
                        Social
                    </div>
                    <div className="text-right">
                        <a href="#"><img src='../images/telegram.png' alt="" /></a>
                        <a href="#"><img src='../images/twi.png' alt="" /></a>
                        <a href="#"><img src='../images/me.png' alt="" /></a>
                    </div>
                </li>
                <li>
                    <div className="text-left">
                        Pre-order Start Time
                    </div>
                    <div className="text-right">
                        9:00 AM Oct 03, 2021 (GMT+07:00)
                    </div>
                </li>
                <li>
                    <div className="text-left">
                        Project Information
                    </div>
                    <div className="text-right">
                        Picipo is a unified NFT management platform on L2. Create, buy, sell, lend, rent, relocate & do everything you want. Using our platform, you can go all the way through token creation to choosing monetization model that you prefer. The platform goes beyond the online market and crypto society, solving the native problems of the fiat market. We unite NFT DeFi, creating a single tool to manage any of your NFTs.
                    </div>
                </li>
            </ul>
        </>
    )
    return (
        <>
            <div className="box-tabs-detail">
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="POOL Detail" key="1">
                    {contentTabs}
                </TabPane>
                <TabPane tab="winner (127)" key="2">
                    {contentTabs}
                </TabPane>
            </Tabs>
            </div>
        </>
    )
}
export default BottomDetail
