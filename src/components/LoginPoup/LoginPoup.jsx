import React, { useState } from 'react'
import './LoginPoup.css'
import { assets } from '../../assets/assets'

const LoginPoup = () => {
     
    const [currState,setCurrState] = useState("Login")  

    return (
    <div className='login-poup' >
      <form action="" className="login-poup-container">
        <div className="login-poup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-poup-input">
            {currState==="Login"?<></>:<input type='text' placeholder='Your name' required/>}
            <input type="text" placeholder='Your name' required />
            <input type="email" placeholder='Your email' required />
            <input type="password" placeholder='Password' required />
        </div>
        <button>
           {currState==="Sign Up"?"Create accout":"Login"} </button>
            <div className="login-poup-condition">
              <input type="checkbox" required />
                <p>By continue</p>
            </div>
            {currState==="Login"
            ?<p>/create a new accout? <span onClick={()=>setCurrState("Sing up")}>Click</span></p>
            :<p>Already have an account? <span onClick={()=>setCurrState("Login")} >Login here</span></p>     
        }
            
           
      </form>
    </div>
  )
}

export default LoginPoup
