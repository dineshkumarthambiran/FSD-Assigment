import logo from './logo.svg';
import './App.css';
import Greetings from './Greetings';
import LoginParentControl from './LoginParentControl';

function App() {
  return (
    <div className="App">
      {/* <Greetings isLoggedin = {true}/> */}
      <LoginParentControl />
    </div>
  );
}

export default App;
