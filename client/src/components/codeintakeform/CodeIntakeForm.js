import React, { useState } from 'react'
import axios from 'axios';

//Styles
import './codeintake.css'

//Redux
import {useSelector} from 'react-redux';

import {useDispatch} from 'react-redux';
import { getCodeEntry } from '../../redux/codeIntakeSlice';

function CodeIntakeForm() {

  const {user} = useSelector(state => state.user )

  const dispatch = useDispatch();

  const [CN1, setCN1] = useState('');
  const [CN2, setCN2] = useState('');
  const [CN3, setCN3] = useState('');
  const [CN4, setCN4] = useState('');
  const [CN5, setCN5] = useState('');
  const [CN6, setCN6] = useState('');

  const handle = (e) => {
    const { maxLength, value, name } = e.target;
    const [cn, cnIndex] = name.split('-')
    console.log(cnIndex)
  }
  
  const submitForm = (e) => {
    e.preventDefault();

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

    axios.post("http://localhost:3001/codeintake/",
       userInfo      
    )

  }

  
  return (
    <div className='main-form'>
      <h3>Insert Receipt Code</h3>
      <form onSubmit={submitForm}>
      <label>CN1 
      <input 
        type="text" 
        name="CN-1" 
        maxLength={4}
        minLength={4}
        onChange={(e)=>handle(e)}
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
        onChange={(e)=>handle(e)}
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
        onChange={(e)=>handle(e)}
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
        onChange={(e)=>handle(e)}
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
        onChange={(e)=>handle(e)}
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
        onChange={(e)=>handle(e)}
        value={CN6}
        //value={CN1 || ""} 
      />
      </label>
      <div>
        <button type='submit'>send code to bot</button>
      </div>
    </form>
    <div style={{marginTop: "60px"}}>
      <h3>Your 22 character long code should be on your receipt.</h3>
      
    </div>
    </div>
  )
}

export default CodeIntakeForm