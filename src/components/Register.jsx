import { Button, TextField } from '@mui/material'
import React from 'react'

const Register = () => {
  return (
    <div className='LogInFrom'>
    <div className="inputsidesection">
        
        <div className='frominput'>
          <div className='welcome-register'>
            <h5>Register</h5>
            {/* <p>please login to your account</p> */}

          </div>

          <form className='form-control rounded-0 ' >
            <div className=' title my-4'>
              <TextField id="standard-basic" label="Email" variant="outlined" placeholder='Enter your Email ' required fullWidth
                name="title" />

            </div>


            <div className='discriptiob'>
              <div className='left'>
                <TextField id="standard-basic " label="password" variant="outlined" placeholder='Enter password ' required fullWidth
                  name="description"
                />
              </div>

              <div className='savebutton my-4 ' >
               <a href="">Forgot Password ? </a>

                <Button type="submit" variant="contained" color="primary" className='loggggin rounded-0  '>
                  Login
                </Button>

              </div>

              <div className='blogin-section'>
                <p> Don't have a accont <span className='Ragester text-primary'>Register</span></p>

              </div>

            </div>



          </form>

        </div>

      </div>
      </div>

  )
}

export default Register
