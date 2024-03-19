import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import loginGif from '../assets/img/GGGG-if-2.gif'
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <div className='LogInFrom'>
      <div className="imageformsection">
        <div className="loginimage">
          <img src={loginGif} alt="" />
        </div>

      </div>

      <div className="inputsidesection">
        
        <div className='frominput'>
          <div className='welcome'>
            <h5>Welcome to Oneclick Shop</h5>
            <p>please login to your account</p>

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
                <p> Don't have a accont <Link to={"/register"}> <span className='Ragester text-primary'>Register</span></Link></p>

              </div>

            </div>



          </form>

        </div>

      </div>




    </div>
  )
}

export default Login
