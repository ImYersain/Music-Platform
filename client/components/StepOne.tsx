import { Grid, TextField } from '@mui/material';
import React from 'react'

const StepOne = () => {
    return (
        <>
        <h2 style={{textAlign: 'center'}}>Step one</h2>

        <Grid container direction={'column'} style={{padding: '20px'}}>
            
            <TextField
                style={{marginTop: '10px'}} 
                label={'Name of song'}
            />
            <TextField 
                style={{marginTop: '10px'}}
                label={'Name of singer'}
            />
            <TextField 
                style={{marginTop: '10px'}}
                label={'Lyrics'}
                multiline
                rows={3}
            />
        </Grid>
        </>
    )
}

export default StepOne;
