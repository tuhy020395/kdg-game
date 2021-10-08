import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Button, Menu, Modal } from 'antd';

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
        style={{ background: 'linear-gradient(90deg, rgb(27 27 28) 0%, rgb(255 214 10 / 18%) 86%)' }}
      >
        <Menu.Item key="logo" className='logoMenu' >
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
