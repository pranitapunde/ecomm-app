import React from 'react'
import TextField from '@mui/material/TextField';



const SingUp = () => {
  return (
    <div className='SingUp'>
        <div className="SignFormBox">
          <div className="headingSignUp">
            <h3> Sign Up </h3>
          </div>
          <div className='SignformSection'>
            <div className='singupmindBox'>
              <p> Sign Up to view your profile</p>

            </div>
            <div className='Numberinput'>
              {/* <form className='form-control'> */}
              <TextField id="standard-basic mx-2 my-5" label="Phone number" variant="standard" fullWidth required className='input mx-2  ' />
              {/* </form> */}
             
            </div>
            <div className="continuebutton">
              <button className='continuebbttnn'> Continue</button>
            </div>

            

          </div>
          

        </div>
      
    </div>
  )
}

export default SingUp
