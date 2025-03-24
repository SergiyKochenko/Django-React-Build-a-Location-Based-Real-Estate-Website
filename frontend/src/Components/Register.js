import React, {use, useEffect, useState} from 'react'
import { data, Form, useNavigate } from 'react-router-dom'
import Axios from 'axios'
// Material UI
import { 
  Grid, 
  AppBar, 
  Typography, 
  Button, 
  Card, 
  CardHeader, 
  CardMedia, 
  CardContent,
  CircularProgress,
  TextField,
} from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    formContainer: {
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '3rem',
        border: '5px solid black',
        padding: '3rem',
    },
    registerBtn: {
        background: 'green',
        color: 'white',
        fontSize: '1.1rem',
        marginLeft: '1rem',
        '&:hover': {
        backgroundColor: 'blue',
    },
    },
})

function Register() {
    const classes = useStyles()
    const navigate = useNavigate()
    const [sendRequest, setSendRequest] = useState(false)
    const [usernameValue, setUsernameValue] = useState('')
    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [password2Value, setPassword2Value] = useState('')



    function FormSubmit(e) {
        e.preventDefault()
        console.log('Form Submitted')
        setSendRequest(!sendRequest)
    }

    useEffect(() => {
    if (sendRequest){
        const source = Axios.CancelToken.source()
    async function SignUp () {
      try {
        const response = await Axios.post('http://127.0.0.1:8000/api-auth-djoser/users/', 
            {
                username: usernameValue,
                email: emailValue,
                password: passwordValue,
                re_password: password2Value,
            }, 
            {
          cancelToken: source.token
        })
        console.log(response)
      } catch (error) {
        console.log(error.response)
      }
    }
    SignUp()
    return () => {
      source.cancel()
    }
    }
  }, [sendRequest])
    return (
        <div className={classes.formContainer}>
            <form onSubmit={FormSubmit}>
                <Grid item container justifyContent={'center'}>
                    <Typography variant='h4'>CREATE AN ACCOUNT</Typography>
                </Grid>

            <Grid item container style={{marginTop: '1rem'}}>
                <TextField 
                    id="username" 
                    label="Username" 
                    variant='outlined' 
                    fullWidth
                    value={usernameValue}
                    onChange={(e)=>setUsernameValue(e.target.value)} />
            </Grid>
            <Grid item container style={{marginTop: '1rem'}}>
                <TextField 
                    id='email' 
                    label='Email' 
                    variant='outlined' 
                    fullWidth
                    value={emailValue}
                    onChange={(e)=>setEmailValue(e.target.value)}
                     />
            </Grid>
            <Grid item container style={{marginTop: '1rem'}}>
                <TextField 
                    id='password' 
                    label='Password' 
                    variant='outlined' 
                    fullWidth
                    type='password'
                    value={passwordValue}
                    onChange={(e)=>setPasswordValue(e.target.value)}
                     />
            </Grid>
            <Grid item container style={{marginTop: '1rem'}}>
                <TextField 
                    id='password2' 
                    label='Confirm Password' 
                    variant='outlined' 
                    fullWidth 
                    type='password'
                    value={password2Value}
                    onChange={(e)=>setPassword2Value(e.target.value)}
                     />
            </Grid>
            <Grid 
                item 
                container
                xs={8} 
                style={{marginTop: '1rem', marginLeft: 'auto', marginRight: 'auto'}}>
                <Button 
                    variant='contained' 
                    color='primary' 
                    fullWidth
                    type='submit'
                    className={classes.registerBtn}>
                        Sign Up
                    </Button>
            </Grid>
            
            </form>
            <Grid item container justifyContent={'center'} style={{marginTop: '1rem'}}>
                    <Typography variant='small'>Already have an account? <span onClick={() => navigate('/login')} style={{cursor: 'pointer', color: 'blue'}}>SIGN IN</span></Typography>
                </Grid>
        </div>
  )
}

export default Register
