import { Grid, TextField } from '@mui/material';
import React, {FC} from 'react';

interface IInputsProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface IStepOneProps {
    nameOfTrack: IInputsProps;
    singerOfTrack: IInputsProps;
    lyricsOfTrack: IInputsProps;
}

const StepOne: FC<IStepOneProps> = ({nameOfTrack, singerOfTrack, lyricsOfTrack}) => {
    return (
        <>
        <h2 style={{textAlign: 'center'}}>Step one</h2>

        <Grid container direction={'column'} style={{padding: '20px'}}>
            
            <TextField
                style={{marginTop: '10px'}} 
                label={'Name of song'}
                {...nameOfTrack}
            />
            <TextField 
                style={{marginTop: '10px'}}
                label={'Name of singer'}
                {...singerOfTrack}
            />
            <TextField 
                style={{marginTop: '10px'}}
                label={'Lyrics'}
                multiline
                rows={3}
                {...lyricsOfTrack}
            />
        </Grid>
        </>
    )
}

export default StepOne;
