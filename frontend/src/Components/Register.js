import React from 'react'
import { useNavigate } from 'react-router-dom'
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
    return (
        <div className={classes.formContainer}>
            <form>
                <Grid item container justifyContent={'center'}>
                    <Typography variant='h4'>CREATE AN ACCOUNT</Typography>
                </Grid>

            <Grid item container style={{marginTop: '1rem'}}>
                <TextField 
                    id="username" 
                    label="Username" 
                    variant='outlined' 
                    fullWidth />
            </Grid>
            <Grid item container style={{marginTop: '1rem'}}>
                <TextField 
                    id='email' 
                    label='Email' 
                    variant='outlined' 
                    fullWidth />
            </Grid>
            <Grid item container style={{marginTop: '1rem'}}>
                <TextField 
                    id='password' 
                    label='Password' 
                    variant='outlined' 
                    fullWidth
                    type='password' />
            </Grid>
            <Grid item container style={{marginTop: '1rem'}}>
                <TextField 
                    id='password2' 
                    label='Confirm Password' 
                    variant='outlined' 
                    fullWidth 
                    type='password' />
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
