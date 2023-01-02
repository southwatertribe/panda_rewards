import './App.css';

import { BrowserRouter, Routes, Route} from "react-router-dom";

import NavBarDos from './components/navbar/NavBarDos';
import LoginPage from './pages/loginPage/LoginPage';
import Dashboard from './pages/Dashboard';
import Leaderboard from './pages/Leaderboard';
import CodeIntake from './pages/codeintakepage/CodeIntake';





function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBarDos/>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/leaderboard" element={<Leaderboard/>}/>
          <Route path="/codeintake" element={<CodeIntake/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
