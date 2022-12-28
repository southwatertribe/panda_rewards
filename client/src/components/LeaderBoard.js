import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';

const getPlayers = async () => {

    players = await axios.get("http://localhost:3001/leaderboards/")

    getPlayers(players)

}

function LeaderBoard() {
    useEffect(() => {
        getPlayers()
    }, [])
    const [players, getPlayers] = useState('');
    console.log(players)
  return (
    <div>LeaderBoards are being built, but your score will still be tracked and you'll still get your rewards</div>
  )
}

export default LeaderBoard