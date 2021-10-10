import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { isMobile } from 'react-device-detect';
import Staking from '../../Staking';
import LaunchpadDetail from '../../LaunchpadDetail';
import MenuMobile from './MenuMobile';
import Home from '../../home';
import Launchpad from '../../launchpad';
import 'antd/dist/antd.css';
import { Button, Menu, Modal } from 'antd';
import './index.css'

function Headers() {
  const [current, setCurrent] = useState('home')
  const handleClick = e => {
    console.log('click ', e);
    setCurrent({ current: e.key });
  };
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  if (isMobile) {
    return <MenuMobile />
  }
  return (
    <Router>
      <div>
          <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal"
            style={{ background: 'linear-gradient(90deg, rgb(27 27 28) 0%, rgb(255 214 10 / 18%) 86%)' }}
          >
            <Menu.Item key="logo" className='logoMenu' >
              <img src='../images/logo.png' alt='logo' />
            </Menu.Item>

            <Menu.Item key="home" >
              <Link  to="/home">Home</Link>
            </Menu.Item>
            
            <Menu.Item key="launchpad" >
              <Link to="/launchpad">LaunchPad</Link>
            </Menu.Item>

            <Menu.Item key="staking" >
              <Link to="/staking">Staking</Link>
            </Menu.Item>

            <Menu.Item key="buyKDG" >
              <a href="https://pancakeswap.finance/swap">Buy KDG</a>
            </Menu.Item>

            <Menu.Item key="connect" style={{ marginInlineStart: 'auto' }} >
              <Button className='btnConnect' onClick={showModal} >Connect Wallet</Button>
            </Menu.Item>
        </Menu>
        <Switch>
            <Route path='/home'>
              <Home />
            </Route>
            <Route path="/launchpad">
              <Launchpad />
            </Route>
            <Route path="/launchpaddetail">
              <LaunchpadDetail />
            </Route>
            <Route path="/staking">
              <Staking />
            </Route>
        </Switch>

        <Modal title="CONNECT WALLET"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={
            <p className='learnMore'>Learn how to connect</p>
          }
        >
          <div className='content-connect'>
            <p className='connect-text'>Content</p>
          </div>
        </Modal>
      </div>
    </Router>
  );
}

export default Headers;
