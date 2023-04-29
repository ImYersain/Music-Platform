import React, {FC} from 'react';
import { Track } from '../../server/src/track/schemas/track.schema';
import { ITrack } from '../types/tracks';
import { Grid, Box } from '@mui/material';
import { TrackItem } from './TrackItem';

interface ITrackListProps  {
    tracks: ITrack[];
}

export const TrackList: FC<ITrackListProps> = ({tracks}) => {


    return (
        <Grid container>
            <Box p={2}>
                {tracks.map((track) => <TrackItem key={track._id} track={track} />)}
            </Box>
        </Grid>
    )
}
