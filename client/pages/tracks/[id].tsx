import React from 'react'
import { ITrack } from '../../types/tracks';
import MainLayout from '@/layouts/MainLayout';
import { useRouter } from 'next/router';
import { Button, TextField } from '@mui/material';
import Grid from '@material-ui/core/Grid/Grid';

const TrackPage = () => {
    const track: ITrack =  {_id: '1', artist: 'Zayn', text: 'I dont wanna live forever', audio: 'http://localhost:5000/audio/900818bc-b11f-492b-ab81-15627fa0b418.mp3', picture: 'http://localhost:5000/image/b569afe2-d227-4fec-9fda-7286795b35df.jpg', comments: [{_id: '1', username: 'John', text: 'So so beatiful song!'}], listens: 3, name: 'Baby'};
    const router = useRouter();
    
    return (
        <MainLayout>
                <Button variant={'outlined'} style={{fontSize: 16, marginBottom: 20}} onClick={() => router.push('/tracks')}>Back to track list</Button>
                <Grid container>
                    <img src={track.picture} width={'200px'} height={'200px'} />
                    <div style={{marginLeft: 30}}>
                        <h1>Song's name: {track.name}</h1>
                        <h1>Singer: {track.artist}</h1>
                        <h1>Auditions: {track.listens}</h1>
                    </div>
                </Grid>
                <h1>Lyrics</h1>
                <p>{track.text}</p>
                <h1>Comments:</h1>
                <Grid container>
                    <TextField label='Your name' fullWidth />
                    <TextField label='Comment' fullWidth multiline rows={4} />
                    <Button>Send</Button>
                </Grid>
                <div>
                    {track.comments.map(comment => 
                        <div>
                            <div>User: {comment.username}</div>
                            <div>Comment: {comment.text}</div>
                        </div>
                    )}
                </div>
        </MainLayout>
    )
}

export default TrackPage;