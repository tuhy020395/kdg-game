import React, { useState } from 'react'
import { Tabs , Input , Select} from 'antd';
import CardListItem from './CardListItem'
import { AudioOutlined } from '@ant-design/icons';

const CardList = () => {
    const { TabPane } = Tabs;
    function callback(key) {
        console.log(key);
    }
    return (
        <>
            <div className="box-card-grid">
                <Tabs defaultActiveKey="1" onChange={callback} className="card-grid-tabs">
                    <TabPane tab="Live" key="1">
                        <CardListItem />
                    </TabPane>
                    <TabPane tab="Finished" key="2">
                        <CardListItem />
                    </TabPane>
                </Tabs>
            </div>
        </>
    )
}
export default CardList