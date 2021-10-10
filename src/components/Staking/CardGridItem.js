import React, { useState } from 'react'
import DepositBox from './DepositBox';
import {
    UpOutlined,
    DownOutlined
  } from '@ant-design/icons';
import './style.css'

const CardGridItem = () => {
    const [isView, setIsView] = useState(false)
    return (
        <>
           <div className="card-item">
               <div className="item-info">
                   <div className="info-header">
                       <div className="header-left">
                            <div className="token-stake">
                                KDG - KDG
                            </div>
                            <div className="time-stake">
                                30 days
                            </div>
                       </div>
                       <div className="header-right">
                            <div className="logo-stake">
                                <div className="box-img-big">
                                    <img src='../images/logo-big.png' alt="" />
                                </div>
                                <div className="box-img-small">
                                    <img src='../images/logo-small.png' alt="" />
                                </div>
                            </div>
                       </div>
                   </div>
                   <div className="info-middle">
                       <div className="token-earn">
                           <div className="token-earn-left">
                                <p className="text-earn">
                                    Earned
                                </p>
                                <div className="value-earn">
                                    0.00 KDG
                                </div>
                           </div>
                           <div className="token-earn-right">
                               <button type="button" className="btn-main">
                                    Harvest
                               </button>
                           </div>
                       </div>
                   </div>
                   {isView && (
                       <div className="box-info-total">
                            <div className="item-info">
                                <div className="item-left">
                                    Total staked
                                </div>
                                <div className="item-right">
                                    31,000,000.235
                                </div>
                            </div>
                            <div className="item-info">
                                <div className="item-left">
                                    Lock-up term
                                </div>
                                <div className="item-right">
                                    30 days
                                </div>
                            </div>
                            <div className="item-info">
                                <div className="item-left">
                                    Remaining
                                </div>
                                <div className="item-right">
                                    30d 23:02:21
                                </div>
                            </div>
                            <div className="item-info">
                                <div className="item-left color-main-info">
                                    See Token Info <img src='../images/infoo.png' alt="" />
                                </div>
                                <div className="item-right color-main-info">
                                    View Project Site <img src='../images/infoo.png' alt="" />
                                </div>
                            </div>
                            <div className="item-info">
                                <div className="item-left color-main-info">
                                    View Contract <img src='../images/infoo.png' alt="" />
                                </div>
                                <div className="item-right color-main-info">
                                    Add to Metamask <img src='../images/meta.png' alt="" />
                                </div>
                            </div>
                            <DepositBox />
                       </div>
                    )}
                   <div className="box-connect-wl">
                        <button type="button" className="btn-main btn-connect">
                            Connect Wallet
                        </button>
                    </div>
                    <div className="info-bottom">
                        <button
                            link
                            className="btn-detail"
                            onClick={() => setIsView(!isView)}
                        >
                            {isView ? 'Hide' : 'Details'} 
                            {
                                isView ? (
                                    <UpOutlined />
                                ) : (
                                    <DownOutlined />
                                )
                            }
                        </button>
                    </div>
               </div>
           </div>
        </>
    )
}
export default CardGridItem