import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router ,Link,Route,Routes } from 'react-router-dom';
import Home from './Home';
import Aboutus from './Aboutus';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to ="/">Home</Link>
        <Link to ="/Aboutus">Aboutus</Link>
        <Link to ="/Dashboard">Dashboard</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path ="*" element={<Errorpage />} ></Route>
          

        </Routes>


      </Router>
      
    </div>
  );
}

export default App;
