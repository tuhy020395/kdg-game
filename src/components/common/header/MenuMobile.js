import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
    MenuUnfoldOutlined,
  } from '@ant-design/icons';
import Staking from '../../Staking';
import LaunchpadDetail from '../../LaunchpadDetail';
import Home from '../../home';
import Launchpad from '../../launchpad';
import 'antd/dist/antd.css';
import { Button, Menu, Modal } from 'antd';

import './index.css'

function MenuMobile () {
    const { SubMenu } = Menu;
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

  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <Router>
      <div>
        <div className="header-mobile">
            <div className="header-left">
                <div className="box-img">
                    <img src='../images/logo.png' alt='logo' />
                </div>
            </div>
            <div className="header-right">
                <Button type="primary" onClick={handleToggle}>
                    <MenuUnfoldOutlined />
                </Button>
            </div>
        </div>
        <div className="menu-mobile">
            <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            className={isActive ? "hide-menu" : "show-menu"}
            >
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
                <div className="bottom-menu-mobile">
                <div className="social-mobile">
                  <ul className="list-social">
                    <li>
                      <img src='../images/tele.png' alt='logo' />
                    </li>
                    <li>
                      <img src='../images/tw.png' alt='logo' />
                    </li>
                    <li>
                      <img src='../images/youtobe.png' alt='logo' />
                    </li>
                    <li>
                      <img src='../images/fb.png' alt='logo' />
                    </li>
                    <li>
                      <img src='../images/Vector.png' alt='logo' />
                    </li>
                  </ul>
                  <div className="copy-right">
                    Copyright © 2020 KingdomGame.Org All Rights Reserved
                  </div>
                </div>
            </div>
            </Menu>
        </div>
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

export default MenuMobile;
