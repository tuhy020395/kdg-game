import React, { useState } from 'react'
import { Steps , Progress } from 'antd';
import 'antd/dist/antd.css';

const MiddleDetail = () => {
    const { Step } = Steps;
    return (
        <>
            <div className="box-dispash-item">
                <div className="item-info">
                    <div className="content-info">
                        <h3 className="title-info">
                            Pool Timeline
                        </h3>
                        <div className="step-pool">
                            <Steps current={0}>
                                <Step title="Upcoming" />
                                <Step  title="Swap" />
                                <Step title="Filled" />
                                <Step  title="Claimable" />
                                <Step title="End" />
                            </Steps>
                        </div>
                        <h3 className="title-info">
                            You can claim your token in
                        </h3>
                        <div className="box-claim-token">
                            <div className="time-claim">
                                <div>00 <span>Days</span></div>
                                 : 
                                <div>23 <span>Hours</span></div>
                                 :
                                <div>26 <span>Minutes</span></div> 
                                    : 
                                <div>39 <span>Seconds</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item-info">
                    <div className="content-info">
                        <h3 className="title-info">
                            SWAP INFO
                        </h3>
                        <div className="swap-amount">
                            <div className="text-top-amount">
                                <div className="text-left">
                                    Swap Amount
                                </div>
                                <div className="text-right">
                                    1 KDG = 0.078  USDT
                                </div>
                            </div>
                            <div className="main-amount">
                                <h3 className="desc-amount">
                                    1,243,589 KDG
                                </h3>
                            </div>
                            <div className="text-bottom-progress">
                                <div className="text-progress">
                                    Swap Progress
                                </div>
                                <div className="progress-line">
                                    <Progress percent={100} status="active" />
                                    <span className="balance-progess">2,913,993.57  / 2,914,285 KDG</span>
                                    <div className="vector-arrow">
                                        <img src='../images/vector-arrow.png' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MiddleDetail 