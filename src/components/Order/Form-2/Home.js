import React, { Component } from 'react'
//import AuthServices from '. sers/91836D-with-Asp.Net-Web-API-main/React-js-Master-Detail-CRUD-with-Asp.Net-Web-API-main/restaurant-app/src/components/home.scss'
import 'D:\\OTHERS\RESTAURANT-APP\restaurant-app\\src\\components\\Order\\home.css'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { Link } from 'react-router-dom'
//const authServices = new AuthServices()

export default class SignIn extends Component {
  

  render() {
    console.log('State : ', this.state)
    return (
      <div>
       


       

       <div class="login-wrap">
        
  <div class="login-html">
  <h1 className="text-center mb-5 text-white">Sign In</h1>
    <input id="tab-1" type="radio" name="tab" class="sign-in" checked/><label for="tab-1" class="tab">User</label>
    <input id="tab-2" type="radio" name="tab" class="sign-up"/><label for="tab-2" class="tab">Admin</label>
    <div className="login-form mt-3">
      <div class="sign-in-htm">
        <div class="group">
          <label for="user" class="label">Username</label>
          <input id="user" type="text" class="input"/>
        </div>
        <div class="group">
          <label for="pass" class="label">Password</label>
          <input id="pass" type="password" class="input" data-type="password"/>
        </div>
        <div class="group">
          <input id="check" type="checkbox" class="check" checked/>
          <label for="check"><span class="icon"></span> Keep me Signed in</label>
        </div>
        <div class="group">
          <input type="submit" class="button" value="Sign In"/>
        </div>
        <div class="hr"></div>
        <div class="foot-lnk">
          <a href="#forgot">Forgot Password?</a>
        </div>
        <div className="foot-lnk mt-5">
          <Link to="/signup">New Registration?</Link>
        </div>
      </div>
      <div class="sign-up-htm">
        <div class="group">
          <label for="user" class="label">Username</label>
          <input id="user" type="text" class="input"/>
        </div>
        <div class="group">
          <label for="pass" class="label">Password</label>
          <input id="pass" type="password" class="input" data-type="password"/>
        </div>
        <div class="group">
          <input id="check" type="checkbox" class="check" checked/>
          <label for="check"><span class="icon"></span> Keep me Signed in</label>
        </div>
        <div class="group">
          <input type="submit" class="button" value="Sign In"/>
        </div>
         
        <div class="hr"></div>
        <div class="foot-lnk">
          <a href="#forgot">Forgot Password?</a>
        </div>

         
        
      </div>
    </div>
  </div>
</div>










       
      </div>
    )
  }
}