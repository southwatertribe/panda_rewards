import './App.css';

import { BrowserRouter, Routes, Route, Router} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Leaderboard from './pages/Leaderboard';
import CodeIntake from './pages/CodeIntake';

function App() {
  const {isLoggedIn} = useSelector(state => state.auth)
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/leaderboard" element={<Leaderboard/>}/>
          {isLoggedIn ? <Router path="/codeintake" element={<CodeIntake/>}/>: <></>}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
