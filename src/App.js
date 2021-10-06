import logo from './logo.svg';
import './App.css';

import Home from './components/home'
import Header from './components/common/header';
import Footer from './components/common/footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
