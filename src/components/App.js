import logo from '../logo.svg';
import '../App.css';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';  

function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
