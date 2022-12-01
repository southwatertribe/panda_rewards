import './App.css';

import { Route, Routes } from "react-router-dom";
import SignInForm from './pages/LoginPage';
import Dashboard from './pages/Dashboard';




function App() {
  return (
    <div className='App'>
      <nav></nav>
      <Dashboard/>
    </div>
  )
}

export default App;
