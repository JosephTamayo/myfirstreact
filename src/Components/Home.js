import logo from '../logo.svg';
import '../App.css';
import Greet from './Greet';
import Message from './Message';
import Button from './Button';
import Hello from './Hello';
// import Employee from './Employee';
import NavBar from './NavBar';

//jsx - js xml
//react not a framework!
//angular. vue
//function\

function App() {  
  return (
    <div className="App">
      {/* <NavBar/> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Greet name = {Hello()} heroName = "Peter North">
        <Message/>
        </Greet>
        <Greet name = "Rick Astley" heroName = "Jebaited">
          <Button/>
        </Greet>
        <Greet name = "177013" heroName = "Metamorphosis"/>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          You won't last 5 minutes playing this game. CLICK NOW!!!!'
        </a>
      </header>
    </div>
  );
}

export default App;
