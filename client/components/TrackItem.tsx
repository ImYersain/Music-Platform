import React, { FC } from 'react'
import { ITrack } from '../types/tracks';
import { Card, IconButton, Grid } from '@material-ui/core';
import styles from '../styles/TrackItem.module.scss';
import { PlayArrow, Pause, Delete } from '@material-ui/icons';
import { useRouter } from 'next/router';
import { useActions } from '../hooks/useActions';

interface ITrackItemProps {
    track: ITrack;
    active?: boolean;
}

export const TrackItem: FC<ITrackItemProps> = ({track, active = true}) => {
    const router = useRouter();
    const {setActiveTrack, playTrack, pauseTrack} = useActions();

    const play = (e:any) => {
        e.stopPropagation();
        setActiveTrack(track);
        playTrack();
    }

    return (
        <Card className={styles.track} onClick={() => router.push(`/tracks/${track._id}`)}>
            <IconButton onClick={play}>
                {active? <Pause /> : <PlayArrow />}
            </IconButton>
            <img width={'70px'} height={'70'} src={track.picture} />
            <Grid container direction={'column'} className={styles.description}>
                <div>{track.name}</div>
                <div className={styles.artist}>{track.artist}</div>
            </Grid>
            {active && <div>02:11/05:00</div>}
            <IconButton onClick={(e) => e.stopPropagation()} className={styles.deleteTrack}>
                <Delete />
            </IconButton>
        </Card>
    )
}
