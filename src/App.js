import logo from './logo.svg';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';

import Home from './components/home'
import LaunchpadDetail from './components/LaunchpadDetail'
import Staking from './components/Staking'
import Headers from './components/common/header';
import Footers from './components/common/footer';


const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">  
      <Headers />
      <Home />
      <Footers />
    </div>
  );
}

export default App;
