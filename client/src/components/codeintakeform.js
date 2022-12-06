import React from 'react'

function codeintakeform() {
  return (
    <form>
      <label>Enter your name:
      <input 
        type="text" 
        name="CN1" 
        //value={CN1 || ""} 
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="CN2" 
          //value={CN2 || ""} 

        />
        </label>
        <input type="submit" />
    </form>
  )
}

export default codeintakeform