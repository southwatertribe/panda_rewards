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

        // <div className="flex">
        // <div className="item">
        //     <p className='place'>Rank</p>
        //     <p>Profile</p>          
        //     <div className="info">
        //         <h3>User</h3>    
        //     </div>                
        // </div>
        // <div className="item">
        //     <span>Score</span>
        // </div>
        
    <>
        <div className="flex">
                        <div className="item">
                            <p className='place'>Rank</p>
                            <p>Profile</p>
                            {/* <img src={value.profile} className="lb-profile" alt="" /> */}
                            <div className="info">
                                <span>User</span>    
                            </div>                
                        </div>
                        <div className="item">
                            <span>Score</span>
                        </div>
                    </div>
            {
                players.map((value, index) => (
                    <div className="flex" key={index}>
                        <div className="item">
                            <p className='place'>{index + 1}</p>
                            <img src={value.profile} className="lb-profile" alt="" />
                            
                            <div className="info">
                                <h3 >{value.f_name}</h3>    
                                <span>{value.l_name}</span>
                                {{index} === 0 ? <h1>First Place</h1>: <></>}
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
