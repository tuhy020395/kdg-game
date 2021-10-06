import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Button, Menu } from 'antd';
import './index.css'

function Header() {
  const [current, setCurrent] = useState('mail')
  const { SubMenu } = Menu;
  const handleClick = e => {
    console.log('click ', e);
    setCurrent({ current: e.key });
  };
  return (
    <div>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal"
         style={{background: '#382f2c'}}
      >
      <Menu.Item key="logo" style={{marginRight: '40px'}} >
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
      <Menu.Item key="connect" style={{marginInlineStart: 'auto'}} >
        <Button className='btnConnect' >Connect Wallet</Button>     
      </Menu.Item>
    </Menu>
    </div>
    

  );
}

export default Header;
