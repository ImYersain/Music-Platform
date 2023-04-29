import React, { FC } from 'react'
import { ITrack } from '../types/tracks';
import { Card, IconButton, Grid } from '@material-ui/core';
import styles from '../styles/TrackItem.module.scss';
import { PlayArrow, Pause, Delete } from '@material-ui/icons';

interface ITrackItemProps {
    track: ITrack;
    active?: boolean;
}

export const TrackItem: FC<ITrackItemProps> = ({track, active = true}) => {
    return (
        <Card className={styles.track}>
            <IconButton>
                {active? <Pause /> : <PlayArrow />}
            </IconButton>
            <img width={'70px'} height={'70'} src={track.picture} />
            <Grid container direction={'column'} className={styles.description}>
                <div>{track.name}</div>
                <div className={styles.artist}>{track.artist}</div>
            </Grid>
            {active && <div>02:11/05:00</div>}
            <IconButton className={styles.deleteTrack}>
                <Delete />
            </IconButton>
        </Card>
    )
}
