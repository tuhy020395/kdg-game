import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import React from 'react' 
import 'antd/dist/antd.css';

import Headers from './components/common/header';
import Footers from './components/common/footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Headers />
        <Footers />
      </div>
    </Router>
  );
}

export default App;
