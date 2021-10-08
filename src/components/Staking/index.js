import React, { useState } from 'react'
import { Tabs , Input , Select} from 'antd';
import CardGrid from './CardGrid'
import CardList from './CardList'
import 'antd/dist/antd.css';
import './style.css'

const Staking = () => {
    const { Option } = Select;
    function handleChange(value) {
        console.log(`selected ${value}`);
    }
    const { Search } = Input;
    const onSearch = value => console.log(value);
    const { TabPane } = Tabs;
    function callback(key) {
        console.log(key);
    }
    const iconList = (
        <>
            <div className="box-img">
                <img src='../images/list-icon.png' alt="" />
            </div>
        </>
    )
    const iconGrid = (
        <>
            <div className="box-img">
                <img src='../images/grid-icon.png' alt="" />
            </div>
        </>
    )
    return (
        <>
            <div className="main-wrapper">
                <div className="container">
                    <div className="box-search">
                        <div className="seach-token">
                            <div className="text-seach">
                                Search
                            </div>
                            <div className="search-item">
                                <Search placeholder="Search Name" onSearch={onSearch} style={{ width: 200 }} />
                            </div>
                        </div>
                    </div>
                    <div className="box-search box-select">
                        <div className="seach-token">
                            <div className="text-seach">
                                Benifits
                            </div>
                            <div className="search-item">
                            <Select defaultValue="all" style={{ width: 150 }} loading>
                                <Option value="all">All</Option>
                            </Select>
                            </div>
                        </div>
                    </div>
                    <div className="tabs-list-grid">
                        <Tabs defaultActiveKey="1" onChange={callback}>
                            <TabPane tab={iconGrid} key="1">
                                <CardGrid />
                            </TabPane>
                            <TabPane tab={iconList} key="2"> 
                                <CardList />
                            </TabPane>
                        </Tabs> 
                    </div>
                </div>
            </div>
        </>
    )
}
export default Staking