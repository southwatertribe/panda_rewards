// eslint-disable-next-line react-hooks/exhaustive-deps
import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import Players from '../components/leaderboardsinfo/Players';

function Leaderboard() {
  const [players, setPlayers] = useState([]);
  const getPlayers = async () => {
    if (players.length === 0) {
      console.log("eh>")
        axios.get("https://panda-backend.herokuapp.com/leaderboards/").then((res)=>{
        sortPlayers(res.data)
        setPlayers(res.data)       
      }).catch(console.error)      
    }
  }

  const sortPlayers = (players) => {
    let players = players.sort(
      (p1, p2) => (p1.score < p2.score) ? 1 : (p1.score > p2.score) ? -1 : 0);
    console.log(players[0].score)
  }
  
  useEffect(() => {
    getPlayers() 
  }, [])
    
  console.log(players)
  return (
    <div>
      <Players players={players}/>
    </div>
  )
}

export default Leaderboard