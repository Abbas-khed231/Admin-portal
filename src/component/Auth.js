import React, { Component } from 'react'
import { Button, TextField, Typography } from '@mui/material';
import { useNavigate, redirect } from 'react-router-dom';

class Auth extends Component {
  constructor(props){
    super(props);

    this.state = {
      form:{
        email:"",
        password:""
      }
    }

    this.creds = {
      email: "farhan@gmail.com",
      password: "123456789"
    }
  }

  componentDidMount() {
    const authenticated = localStorage.getItem('isAuthenticated');
    if(authenticated){
      // console.log('redirect');
      // return ('/dashboard');
    }
  }

  handleForm = (key,value) => {
    let { form } = this.state;
    form[key] = value;
    this.setState({ form });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {form} = this.state;
    const { email, password } = this.creds;
    if ( form.email === email && form.password === password) {
      localStorage.setItem('isAuthenticated', 1);
    } else {
      alert('Invalid email & password');
    }
  }

  render() {
    return (
      <>
      <div style={{display:"flex",justifyContent:"space-evenly", alignItems:"center"}}>
        <div>
          <div>
            <div>
                <Typography variant='h4' style={{fontWeight:"700"}}>Login</Typography>
            </div>
          </div>

          <div>
            <p style={{color:"gray"}}>Don't have an account?<span style={{color:"rgb(99, 102, 241)", fontWeight:"500", cursor:"pointer"}}></span></p>
          </div>

          <form onSubmit={this.handleSubmit}>
            <div>
              <div>
                <TextField  label="Email Address" style={{width:"500px", marginTop:"2rem"}} onChange={(e) => this.handleForm('email', e.target.value)}/><br/>
              </div>
              <div>
                <TextField label="Password" type='password' style={{width:"500px", marginTop:"2rem"}} onChange={(e) => this.handleForm('password', e.target.value)}/>
              </div>
              <div>
                <Button variant='contained' style={{width:"500px",lineHeight:"1.75", marginTop:"2rem", backgroundColor:" rgb(99, 102, 241)", cursor:"pointer", padding:"11px 24px"}} type={'submit'}>Continue</Button>
              </div>
              <div>
                <Button  style={{width:"500px",lineHeight:"1.75", marginTop:"2rem",cursor:"pointer", padding:"11px 24px", backgroundColor:"transparent"}}>Skip authentication</Button>
              </div>
            </div>
          </form>
        </div>
        <div>
          <div style={{background:"radial-gradient(50% 50% at 50% 50%, rgb(18, 38, 71) 0%, rgb(9, 14, 35) 100%)", float:"right"}}>
            <h1 style={{textAlign:"center", color:"#fff"}}>Welcome to <span style={{color:"rgb(21, 183, 158)"}}>Devias kit</span></h1>
            <h6 style={{textAlign:"center", fontSize:"24px", color:"#fff"}}>A professional kit that comes with ready-to-use MUI components.</h6>
            <img style={{padding:"24px",height:"25%" }} src='https://material-kit-react.devias.io/assets/auth-illustration.svg' alt=''/>
          </div>
        </div>
      </div>
      </>
    )
  }
}


export default Auth;


