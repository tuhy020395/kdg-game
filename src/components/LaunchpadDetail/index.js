import React, { useState } from 'react'
import TopDetail from './TopDetail';
import MiddleDetail from './MiddleDetail'
import 'antd/dist/antd.css';
import './style.css'

const LaunchpadDetail = () => {
    return (
        <>
            <div className="main-wrapper">
                <div className="container">
                    <TopDetail />
                    <MiddleDetail />
                </div>
            </div>
        </>
    )
}
export default LaunchpadDetail