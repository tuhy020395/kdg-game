import React from 'react'
import 'antd/dist/antd.css';
import { ArrowRightOutlined } from '@ant-design/icons';
import './bottom.css'
import { Button } from 'antd';


function Bottom() {
    return (

        <div className='bottom'>
            <div className='bottomContent'>
                <div className='bottomText'>Let's start your journey with KingdomStarter!</div>
                <div>
                <Button className='btnJoinNowBottom'>
                    Join now
                    <ArrowRightOutlined />
                </Button>
                </div>
                
            </div>

        </div>
    );
}

export default Bottom;
