import './App.css';

import { BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Leaderboard from './pages/Leaderboard';
import CodeIntake from './pages/CodeIntake';




function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/leaderboard" element={<Leaderboard/>}/>
          <Route path="/codeintake" element={<CodeIntake/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
