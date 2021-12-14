import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Message from './components/Message';
import Button from './components/Button';
import Hello from './components/Hello';
import Employee from './components/Employee';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Router from './components/Router';

//jsx - js xml
//react not a framework!
//angular. vue
//function
function App() {  
  return (
    <div>
      <NavBar/>
       {/* <Home/> */}
       <Router/>
    </div>
  );
}

export default App;
