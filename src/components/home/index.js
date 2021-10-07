import React from 'react'
import 'antd/dist/antd.css';
import HomeTop from './homeTop';
import About from './about';
import LaunchPad from './launchpad';
import Market from './market';
import Bottom from './bottom';

function Content() {

  return (

   <div>
     <HomeTop />
     <About />
     <LaunchPad />
     <Market />
     <Bottom />
   </div>

  );
}

export default Content;
