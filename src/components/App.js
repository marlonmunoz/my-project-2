import logo from '../logo.svg';
import '../App.css';
import '../NavBar.css';  
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';  
import Header from './Header';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
