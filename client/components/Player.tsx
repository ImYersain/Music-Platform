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
    const {active, currentTime, duration, volume, pause} = useTypedSelector((state) => state.playerReducer);
    const {playTrack, pauseTrack, setVolume, setDurationTime, setCurrentTime} = useActions();

    useEffect(() => {
        if(!audio) {
            audio = new Audio();
        } else {
            setAudio();
            playTrack();
        }
    }, [active]);
   

    const setAudio = () => {
        if(active) {
            audio.src = 'http://localhost:5000/' + active.audio;
            audio.volume = 1;
            audio.onloadedmetadata = () => {
                setDurationTime(Math.ceil(audio.duration));
            }
            audio.ontimeupdate = () => {
                setCurrentTime(Math.ceil(audio.currentTime));
            }
            console.log(active);
        }
    }

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

    if(!active) {
        return null;
    }

    return (
        <div className={styles.player}>
            <IconButton onClick={onPlay}>
                {pause? <PlayArrow /> : <Pause />}
            </IconButton>
            <Grid container direction={'column'} className={styles.description}>
                <div>{active?.name}</div>
                <div className={styles.artist}>{active?.artist}</div>
            </Grid>
            <TrackProgress left={currentTime} right={duration} onChange={onChangeCurrentTime} />
            <VolumeUp style={{marginLeft: 'auto'}} />
            <TrackProgress left={volume} right={100} onChange={onChangeVolume} />
        </div>
    )
}


export default Player;