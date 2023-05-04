import React, { FC } from 'react'

interface ITrackProgressProps {
    left: number;
    right: number;
    onChange: (e: any) => void;
};

const TrackProgress: FC<ITrackProgressProps> = ({left, right, onChange}) => {
    return (
        <div style={{display: 'flex'}}>
            <input type={'range'} min={0} max={right} value={left} onChange={onChange} />
            <div>{left} / {right}</div>
        </div>
    )
}

export default TrackProgress;
