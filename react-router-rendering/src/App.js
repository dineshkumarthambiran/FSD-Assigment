import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router , Link , Routes , Route } from 'react-router-dom';
import Home from './Home';
import Student from './Student';
import Teacher from './Teacher';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to ="/">Home</Link>
        <Link to = "/Student ">Student</Link>
        <Link to = "/Teacher">Teacher</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Student" element={<Student/>} />
          <Route path="/Teacher" element={<Teacher />} />
          </Routes>
        </Router>

      
    
    </div>
  );
}

export default App;
