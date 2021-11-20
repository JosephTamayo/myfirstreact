import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Message from './Components/Message';
import Button from './Components/Button';
import Hello from './Components/Hello';
import Employee from './Components/Employee';

//jsx - js xml
//react not a framework!
//angular. vue
//function
function App() {  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Employee/>
        {/* <p>{Hello()}</p> */}
        <Greet name = {Hello()} heroName = "Spiderman">
        {/* <Greet name = "Peter" heroName = "Spiderman"> */}
        <Message/>
        </Greet>
        <Greet name = "Tony" heroName = "Iron man">
          <Button/>
        </Greet>
        <Greet name = "Thor" heroName = "Thor"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
