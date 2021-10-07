import React, { useState } from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import 'antd/dist/antd.css';
import { Button, Menu, Layout, Modal } from 'antd';

import './index.css'


function Headers() {
  const [current, setCurrent] = useState('mail')
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
  return (

    <div>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal"
        style={{ background: '#382f2c' }}
      >
        <Menu.Item key="logo" style={{ marginRight: '40px' }} >
          <img src='../images/logo.png' alt='logo' />
        </Menu.Item>

        <Menu.Item key="project" >
          Project
        </Menu.Item>

        <Menu.Item key="launchpad" >
          Launchpad
        </Menu.Item>

        <Menu.Item key="staking" >
          Staking
        </Menu.Item>

        <Menu.Item key="buyKDG" >
          Buy KDG
        </Menu.Item>


        <Menu.Item key="connect" style={{ marginInlineStart: 'auto' }} >
          <Button className='btnConnect' onClick={showModal} >Connect Wallet</Button>
        </Menu.Item>
      </Menu>



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



  );
}

export default Headers;
