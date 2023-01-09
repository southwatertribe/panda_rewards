import React, { useState } from 'react'
import axios from 'axios';

//Styles
import './codeintake.css'
import CircularProgress from '@mui/material/CircularProgress';
//Redux
import {useSelector} from 'react-redux';

import {useDispatch} from 'react-redux';
import { getCodeEntry } from '../../redux/codeIntake';



function CodeIntakeForm() {

  const user = useSelector(state => state.persistedReducer.user.user )

  const dispatch = useDispatch();

  //Code State
  const [CN1, setCN1] = useState('');
  const [CN2, setCN2] = useState('');
  const [CN3, setCN3] = useState('');
  const [CN4, setCN4] = useState('');
  const [CN5, setCN5] = useState('');
  const [CN6, setCN6] = useState('');
  const [isWorking, setWorking] = useState(false);

  //Code response state 
  const [result, setResult] = useState(null);


  
  const submitForm = (e) => {
    e.preventDefault();
    setResult(null)
    setWorking(true)
    const code = {
      CN1: CN1,
      CN2: CN2,
      CN3: CN3,
      CN4: CN4,
      CN5: CN5,
      CN6: CN6,
    }

    const userInfo = {
      code: code,
      user: user
    }
    
  dispatch(getCodeEntry(code))

    axios.post("/codeintake/",
       userInfo      
    ).then((res)=> {
      setResult(res.data)
      setWorking(false)
    }).catch((err)=>{
      console.log("Error was: " + err)
      setResult(err)
      setWorking(false)
    })

  }

  //Component to show result message
  function SubmitionResult(props) {
    const message = props.result
    if (message === "Wrong Code!") {
      return <h1>Looks like that code did not work. Try it again.</h1>;      
    } else if (message === "Sucess") {
      return <h1>Survey was successfully completed! Check your email for your free entree 😏 it might be in your promotions folder.</h1>;
    } else{
      return <h1>Looks like theres a problem on our side, try again later.</h1>;
    } 
  }

  
  return (
    <div>
      {!isWorking ? <div className='main-form'>
        <h3>Insert Receipt Code</h3>
        <form onSubmit={submitForm}>
        <label>CN1 
        <input 
          type="text" 
          name="CN-1" 
          maxLength={4}
          minLength={4}
          onChange={(e)=>setCN1(e.target.value)}
          value={CN1}
          autoFocus
          //value={CN1 || ""} 
        />
        </label>
        
        <label>CN2 
        <input 
          type="text" 
          name="CN-2" 
          maxLength={4}
          minLength={4}
          onChange={(e)=>setCN2(e.target.value)}
          value={CN2}
          //value={CN1 || ""} 
        />
        </label>
        <label>CN3 
        <input 
          type="text" 
          name="CN-3" 
          maxLength={4}
          minLength={4}
          onChange={(e)=>setCN3(e.target.value)}
          value={CN3}
          //value={CN1 || ""} 
        />
        </label>
        <label>CN4 
        <input 
          type="text" 
          name="CN-4" 
          maxLength={4}
          minLength={4}
          onChange={(e)=>setCN4(e.target.value)}
          value={CN4}
          //value={CN1 || ""} 
        />
        </label>
        <label>CN5 
        <input 
          type="text" 
          name="CN-5" 
          maxLength={4}
          minLength={4}
          onChange={(e)=>setCN5(e.target.value)}
          value={CN5}
          //value={CN1 || ""} 
        />
        </label>
        <label>CN6 
        <input 
          type="text" 
          name="CN-6" 
          maxLength={2}
          minLength={2}
          onChange={(e)=>setCN6(e.target.value)}
          value={CN6}
          //value={CN1 || ""} 
        />
        </label>
        <div>
          <button type='submit' className='codeSubmission'>send code to bot</button>
        </div>
      </form>
    </div>: <div className='main-form'><p style={{margin: "50px"}}>Panda Bot is slaving away over at Amazon Data Centers...</p><CircularProgress color='secondary'/></div>}
    <div style={{marginTop: "60px"}}>
        <h3>Your 22 character long code should be on your receipt.</h3>
    </div>
    {result && !isWorking ? <SubmitionResult result={result}/> : <></> }
    </div>
  )
}


export default CodeIntakeForm