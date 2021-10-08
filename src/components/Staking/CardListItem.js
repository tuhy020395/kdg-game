import React, { useState } from 'react'
import { Collapse } from 'antd';
import {
    UpOutlined,
    DownOutlined
  } from '@ant-design/icons';
import './style.css'

const CardListItem = () => {
    const { Panel } = Collapse;
    function callback(key) {
        console.log(key);
    }
    const contentBody = (
        <>
            <div className="content-body">
                <div className="box-content">
                    <div className="guide-content">
                        <ul className="infomation">
                            <li>
                                <a href="#">
                                    See Token Info <img src='../images/infoo.png' alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    View Project Site <img src='../images/infoo.png' alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    View Contract <img src='../images/infoo.png' alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Add to Metamask <img src='../images/meta.png' alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="guide-content">
                        <div className="box-intro">
                            <div className="text-top">
                                Earned
                            </div>
                            <div className="text-bottom">
                                0.00 KDG
                            </div>
                            <div className="box-button" type="button">
                                <button className="btn-main btn-harves">
                                    Harvest
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="guide-content">
                        <div className="box-intro">
                            <div className="text-bottom padd-b-35">
                                Start Staking
                            </div>
                            <div className="box-button" type="button">
                                <button className="btn-main btn-harves connect">
                                    Connect Wallet
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="show-mobile">
                        <div className="intro-detail">
                            <div className="text-left">
                                Total staked
                            </div>
                            <div className="text-right">
                                31,000,000.235
                            </div>
                        </div>
                        <div className="intro-detail">
                            <div className="text-left">
                                Lock-up term
                            </div>
                            <div className="text-right">
                                30 days
                            </div>
                        </div>
                        <div className="intro-detail">
                            <div className="text-left">
                                Remaining
                            </div>
                            <div className="text-right">
                                30d 23:02:21
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

    const headerItem = (
        <>
            <div className="header-item">
                <ul className="list-header">
                    <li>
                        <div className="info-item-header d-flex">
                            <div className="box-logo">
                                <div className="box-img-big">
                                    <img src='../images/logo-big.png' alt="" />
                                </div>
                                <div className="box-img-small">
                                    <img src='../images/logo-small.png' alt="" />
                                </div>
                            </div>
                            <div className="name-token">
                                <div className="text-token">
                                    KDG - KDG
                                </div>
                                <div className="time-line">
                                    30 days
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="info-item-header">
                            <div className="text-top">
                                Earned
                            </div>
                            <div className="text-bottom">
                                0.00 KDG
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="info-item-header">
                            <div className="text-top">
                                Total staked
                            </div>
                            <div className="text-bottom">
                                31,000,000.235
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="info-item-header">
                            <div className="text-top">
                                Lock-up term
                            </div>
                            <div className="text-bottom">
                                30 days
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="info-item-header">
                            <div className="text-top">
                                Remaining
                            </div>
                            <div className="text-bottom">
                                30d 23:02:21
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
    return (
        <>
            <div className="box-collapse">
                <Collapse defaultActiveKey={['']} onChange={callback}>
                    <Panel header={headerItem} key="1">
                        {contentBody}
                    </Panel>
                    <Panel header={headerItem} key="2">
                        {contentBody}
                    </Panel>
                    <Panel header={headerItem} key="3">
                        {contentBody}
                    </Panel>
                </Collapse>
            </div>
        </>
    )
}
export default CardListItem