import './App.css';

import { BrowserRouter, Routes, Route} from "react-router-dom";

import NavBarDos from './components/navbar/NavBarDos';
import LoginPage from './pages/loginPage/LoginPage';
import Dashboard from './pages/Dashboard';
import Leaderboard from './pages/Leaderboard';
import CodeIntake from './pages/codeintakepage/CodeIntake';

import ProtectedRoute from './utils/protectedRoute';



function App() {
  return (
    <div className='App'>
          <BrowserRouter>
          <NavBarDos/>
          <Routes>
          <Route path="/" element={
          <ProtectedRoute>
          <Dashboard/>
          </ProtectedRoute>
          }/>
          <Route path="/codeintake" element={
          <ProtectedRoute>
          <CodeIntake/>
          </ProtectedRoute>
          }/>
          
          
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/leaderboard" element={<Leaderboard/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
