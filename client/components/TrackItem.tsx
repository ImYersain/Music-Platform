import React, { FC } from 'react'
import { ITrack } from '../types/tracks';

interface ITrackItemProps {
    track: ITrack;
    active?: boolean;
}

export const TrackItem: FC<ITrackItemProps> = ({track, active}) => {
    return (
        <div>
            {track.name}
        </div>
    )
}
