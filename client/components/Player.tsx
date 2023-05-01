import React from 'react'
import { IconButton } from '@material-ui/core';
import { Pause, PlayArrow } from '@material-ui/icons';
import styles from '../styles/Player.module.scss';
import { ITrack } from '../types/tracks';
import { Grid } from '@mui/material';
import TrackProgress from './TrackProgress';
import {VolumeUp} from '@material-ui/icons'

const Player = () => {
    const track: ITrack =  {_id: '1', artist: 'Zayn', text: 'I dont wanna live forever', audio: 'http://localhost:5000/audio/900818bc-b11f-492b-ab81-15627fa0b418.mp3', picture: 'http://localhost:5000/image/b569afe2-d227-4fec-9fda-7286795b35df.jpg', comments: [{_id: '1', username: 'John', text: 'So so beatiful song!'}], listens: 3, name: 'Baby'};
    const active = false;

    return (
        <div className={styles.player}>
            <IconButton onClick={(e) => e.stopPropagation()}>
                {active? <Pause /> : <PlayArrow />}
            </IconButton>
            <Grid container direction={'column'} className={styles.description}>
                <div>{track.name}</div>
                <div className={styles.artist}>{track.artist}</div>
            </Grid>
            <TrackProgress left={0} right={100} onChange={() => {}} />
            <VolumeUp style={{marginLeft: 'auto'}} />
            <TrackProgress left={0} right={100} onChange={() => {}} />
        </div>
    )
}


export default Player;