import React, { useState } from 'react'
import { Tabs , Input , Pagination} from 'antd';
import 'antd/dist/antd.css';

const BottomDetail = () => {
    const { TabPane } = Tabs;
    function callback(key) {
        console.log(key);
    }
    const { Search } = Input;
    const onSearch = value => console.log(value);
    const contentTabsPool = (
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
    const contentTabsWinner = (
        <>
            <div className="content-tabs-winner">
                <div className="search-text">
                    <Search placeholder="Search your wallet address" onSearch={onSearch} />
                </div>
                <div className="table-winner">
                    <table>
                        <tr>
                            <th>No</th>
                            <th>Wallet Address</th>
                        </tr>
                        <tr>
                            <td>
                                1
                            </td>
                            <td>
                                0x5A2b5aCb5E33*************44A2F413b7120e
                            </td>
                        </tr>
                        <tr>
                            <td>
                                2
                            </td>
                            <td>
                                0x5A2b5aCb5E33*************44A2F413b7120e
                            </td>
                        </tr>
                        <tr>
                            <td>
                                3
                            </td>
                            <td>
                                0x5A2b5aCb5E33*************44A2F413b7120e
                            </td>
                        </tr>
                        <tr>
                            <td>
                                4
                            </td>
                            <td>
                                0x5A2b5aCb5E33*************44A2F413b7120e
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="pani-list">
                    <Pagination defaultCurrent={1} total={50} />
                </div>
            </div>
        </>
    )
    return (
        <>
            <div className="box-tabs-detail">
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="POOL Detail" key="1">
                    {contentTabsPool}
                </TabPane>
                <TabPane tab="winner (127)" key="2">
                    {contentTabsWinner}
                </TabPane>
            </Tabs>
            </div>
        </>
    )
}
export default BottomDetail
