import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Menu } from 'antd';

function Header() {
  const [current, setCurrent] = useState('mail')
  const { SubMenu } = Menu;
  const handleClick = e => {
    console.log('click ', e);
    setCurrent({ current: e.key });
  };
  return (
    <div style={{backgroundColor:'black'}}>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="logo" >
        <img src='../images/logo.png' />
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
        BuyKDG
      </Menu.Item>
    </Menu>
    </div>
    

  );
}

export default Header;
