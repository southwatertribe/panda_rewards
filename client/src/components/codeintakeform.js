import React, { useState } from 'react'

//Redux
import {useDispatch} from 'react-redux';
import { getCodeEntry } from '../redux/codeIntakeSlice';

function CodeIntakeForm() {

  const dispatch = useDispatch();

  const [CN1, setCN1] = useState('');
  const [CN2, setCN2] = useState('');
  const [CN3, setCN3] = useState('');
  const [CN4, setCN4] = useState('');
  const [CN5, setCN5] = useState('');
  const [CN6, setCN6] = useState('');

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

    dispatch(getCodeEntry(code))

  }
  return (
    <div>
      <h3>Insert Receipt Code</h3>
      <form onSubmit={submitForm}>
      <label>CN1:
      <input 
        type="text" 
        name="CN1" 
        maxLength={4}
        onChange={(e)=>setCN1(e.target.value)}
        value={CN1}
        //value={CN1 || ""} 
      />
      </label>
      <p>-</p>
      <label>CN2:
      <input 
        type="text" 
        name="CN1" 
        maxLength={4}
        onChange={(e)=>setCN2(e.target.value)}
        value={CN2}
        //value={CN1 || ""} 
      />
      </label>3
      <label>CN
      <input 
        type="text" 
        name="CN1" 
        maxLength={4}
        onChange={(e)=>setCN3(e.target.value)}
        value={CN3}
        //value={CN1 || ""} 
      />
      </label>
      <label>CN4
      <input 
        type="text" 
        name="CN1" 
        maxLength={4}
        onChange={(e)=>setCN4(e.target.value)}
        value={CN4}
        //value={CN1 || ""} 
      />
      </label>
      <label>CN5
      <input 
        type="text" 
        name="CN1" 
        maxLength={4}
        onChange={(e)=>setCN5(e.target.value)}
        value={CN5}
        //value={CN1 || ""} 
      />
      </label>
      <label>CN6
      <input 
        type="text" 
        name="CN1" 
        maxLength={2}
        onChange={(e)=>setCN6(e.target.value)}
        value={CN6}
        //value={CN1 || ""} 
      />
      </label>
      <div>
        <button type='submit'>send code to bot</button>
      </div>
    </form>
    </div>
  )
}

export default CodeIntakeForm