import React from 'react'

//styles
import "./players.css"

export default function players({ players }) {
    return (
          <div id="profile">
              {LeaderBoardItem(players)}
          </div>
    )
  }

function LeaderBoardItem(players) {
  return (
    <>
            {
                players.map((value, index) => (
                    <div className="flex" key={index}>
                        <div className="item">
                            <img src={value.profile} alt="" />
            
                            <div className="info">
                                <h3 className='name text-dark'>{value.name}</h3>    
                                <span>{value.f_name}</span>
                            </div>                
                        </div>
                        <div className="item">
                            <span>{value.score}</span>
                        </div>
                    </div>
                    )
                )
            }
        </>
  )
}
