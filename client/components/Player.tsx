import React, {useEffect} from 'react'
import { IconButton } from '@material-ui/core';
import { Pause, PlayArrow } from '@material-ui/icons';
import styles from '../styles/Player.module.scss';
import { ITrack } from '../types/tracks';
import { Grid } from '@mui/material';
import TrackProgress from './TrackProgress';
import {VolumeUp} from '@material-ui/icons'
import { useActions } from '../hooks/useActions';
import { useSelector } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';

let audio: HTMLAudioElement;

const Player = () => {
    const track: ITrack =  {_id: '1', artist: 'Zayn', text: 'I dont wanna live forever', audio: 'http://localhost:5000/audio/19c4d32e-105f-4819-be0f-b3d54e55dc55.mp3', picture: 'http://localhost:5000/image/b569afe2-d227-4fec-9fda-7286795b35df.jpg', comments: [{_id: '1', username: 'John', text: 'So so beatiful song!'}], listens: 3, name: 'Baby'};
    const {active, currentTime, duration, volume, pause} = useTypedSelector((state) => state.playerReducer);
    const {playTrack, pauseTrack, setVolume, setDurationTime, setCurrentTime} = useActions();

    useEffect(() => {
        if(!audio) {
            audio = new Audio();
            audio.src = track.audio;
            audio.volume = 1;
            audio.onloadedmetadata = () => {
                setDurationTime(Math.ceil(audio.duration));
            }
            audio.ontimeupdate = () => {
                setCurrentTime(Math.ceil(audio.currentTime));
            }
        }
    }, [])

    const onPlay = () => {
        if(pause) {
            playTrack();
            audio.play();
        } else {
            pauseTrack();
            audio.pause();
        }
    }

    const onChangeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.volume = +e.target.value / 100;
        setVolume(+e.target.value);
    }

    const onChangeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.currentTime = +e.target.value;
        setCurrentTime(+e.target.value);
    }

    return (
        <div className={styles.player}>
            <IconButton onClick={onPlay}>
                {pause? <PlayArrow /> : <Pause />}
            </IconButton>
            <Grid container direction={'column'} className={styles.description}>
                <div>{track.name}</div>
                <div className={styles.artist}>{track.artist}</div>
            </Grid>
            <TrackProgress left={currentTime} right={duration} onChange={onChangeCurrentTime} />
            <VolumeUp style={{marginLeft: 'auto'}} />
            <TrackProgress left={volume} right={100} onChange={onChangeVolume} />
        </div>
    )
}


export default Player;