import React, { useState } from 'react'
import { Button, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
 divStyle: {
   width: '100%',
   border: "2px solid red",
   padding: '15px'
 },
  btnStyle: {
    backgroundColor: 'yellow',

  }
})

function CustomCard() {
    const [btnColor, setBtnColor] = useState('error');
    const classes = useStyles();
  return (
    <div className={classes.divStyle}>
        <Typography variant='h4'>This is the title</Typography>
        <Typography variant='body1'>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </Typography>
        <Button
          onClick={() => setBtnColor('success')}
          variant='contained'
          size='medium'
          className={classes.btnStyle}
          color={btnColor}>
          GO TO LISTINGS
        </Button>
    
        </div>
  )
}

export default CustomCard
