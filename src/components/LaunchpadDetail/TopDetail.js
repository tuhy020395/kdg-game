import React, { useState } from 'react'
import 'antd/dist/antd.css';

const TopDetail = () => {
    return (
        <>
            <div className="main-top-detail">
                <div className="main-title">
                    <div className="box-img">
                        <img src='../images/logo-detail-1.png' alt="" />
                    </div>
                    <div className="desc">
                        Mu Kingdom Mobile
                    </div>
                </div>
            </div>
            <div className="main-middle-detail">
                <ul className="list-three-item">
                    <li>
                        <img src='../images/item-icon-3.png' alt="" /> <span> KDG </span>
                    </li>
                    <li>
                        <img src='../images/item-icon-2.png' alt="" /> <span> Binance Smart Chain </span>
                    </li>
                    <li>
                        <img src='../images/item-icon-1.png' alt="" /> <span> Launching in 3 day </span>
                    </li>
                </ul>
            </div>
            <div className="main-bottom-detail">
                <button type="button" className="btn-main"> 
                    Apply Whitelist
                </button>
            </div>
        </>
    )
}
export default TopDetail