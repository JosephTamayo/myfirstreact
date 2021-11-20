import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Message from './components/Message';
import Button from './components/Button';
import Hello from './components/Hello';
import Employee from './components/Employee';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> am pogi ni sir.
        </p>
         <Employee/>
         <p>{Hello()}</p>
         <Button/>
        <Greet name="Rick " heroName=" Rick Astley"/>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          You won't last 5 mins playing this video. Click now! 
        </a>
      </header>
    </div>
  );
}

export default App;
