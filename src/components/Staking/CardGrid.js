import React, { useState } from 'react'
import { Tabs , Input , Select} from 'antd';
import CardGridItem from './CardGridItem'
import { AudioOutlined } from '@ant-design/icons';

const CardGrid = () => {
    const { TabPane } = Tabs;
    function callback(key) {
        console.log(key);
    }
    return (
        <>
            <div className="box-card-grid">
                <Tabs defaultActiveKey="1" onChange={callback} className="card-grid-tabs">
                    <TabPane tab="Live" key="1">
                        <div className="card-list">
                            <CardGridItem />
                            <CardGridItem />
                            <CardGridItem />
                        </div>
                    </TabPane>
                    <TabPane tab="Finished" key="2">
                        <div className="card-list">
                            <CardGridItem />
                            <CardGridItem />
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        </>
    )
}
export default CardGrid