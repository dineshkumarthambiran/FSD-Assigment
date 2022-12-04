import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Main from './Main'
import Stateclass from './Stateclass'
import DisplayTodo from './DisplayTodo';
import Todo from './Todo';

function App() {
  return (
    <div className="App">

      <p>hello</p>
      {/* <Header appname = "My app" />
      <Main about = "this is my current app" />

      <Stateclass /> */}
      
      {/*this is for todo task */}
      <DisplayTodo />


      
      
    </div>
  );
}

export default App;
