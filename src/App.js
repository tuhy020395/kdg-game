import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React from 'react' 
import 'antd/dist/antd.css';
import Home from './components/home'
import LaunchpadDetail from './components/LaunchpadDetail'
import LaunchPad from './components/launchpad'
import Staking from './components/Staking'
import Headers from './components/common/header';
import Footers from './components/common/footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Headers />
        <Home />
        <Footers />
      </div>
    </Router>
  );
}

export default App;
