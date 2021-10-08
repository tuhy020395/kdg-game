import React from 'react'
import 'antd/dist/antd.css';
import { ArrowRightOutlined } from '@ant-design/icons';
import './bottom.css'
import { Button } from 'antd';


function Bottom() {
    return (

        <div className='bottom'>
            <div style={{paddingTop:'100px'}}>
                <div className='bottomText'>Let's start your journey with KingdomStarter!</div>
                <Button className='btnJoinNowBottom'>
                    Join now
                    <ArrowRightOutlined />
                </Button>
            </div>

        </div>
    );
}

export default Bottom;
