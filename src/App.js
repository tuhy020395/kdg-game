import './App.css';
import Home from './components/home'
import LaunchpadDetail from './components/LaunchpadDetail'
import LaunchPad from './components/launchpad'
import Headers from './components/common/header';
import Footers from './components/common/footer';



function App() {
  return (
    <div className="App">
      <Headers />
      {/* <Home /> */}
      <LaunchPad />
      <Footers />
    </div>
  );
}

export default App;
