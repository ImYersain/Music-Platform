import MainLayout from '@/layouts/MainLayout';
import { Button, Card, Grid, Box } from '@mui/material';
import React from 'react';
import { useRouter } from 'next/router';
import { ITrack } from '../../types/tracks';
import { TrackList } from '../../components/TrackList';

const Index = () => {
    const router = useRouter();
    const tracks: ITrack[] = [
        {_id: '1', artist: 'Zayn', text: 'I dont wanna live forever', audio: 'http://localhost:5000/audio/900818bc-b11f-492b-ab81-15627fa0b418.mp3', picture: 'http://localhost:5000/image/b569afe2-d227-4fec-9fda-7286795b35df.jpg', comments: [{_id: '1', username: 'John', text: 'So so beatiful song!'}], listens: 3, name: 'Baby'},

        {_id: '2', artist: 'BTR', text: 'We are', audio: 'http://localhost:5000/audio/900818bc-b11f-492b-ab81-15627fa0b418.mp3', picture: 'http://localhost:5000/image/b569afe2-d227-4fec-9fda-7286795b35df.jpg', comments: [{_id: '1', username: 'John', text: 'So so beatiful song!'}], listens: 3, name: 'We are'},

        {_id: '3', artist: 'Scriptonite', text: 'VCVBBB', audio: 'http://localhost:5000/audio/900818bc-b11f-492b-ab81-15627fa0b418.mp3', picture: 'http://localhost:5000/image/b569afe2-d227-4fec-9fda-7286795b35df.jpg', comments: [{_id: '1', username: 'John', text: 'So so beatiful song!'}], listens: 3, name: 'VCVBBB'}
    ];

    return (
        <MainLayout>
            <Grid container justifyContent='center'>
                <Card style={{width: 900}}>
                    <Grid container p={3} justifyContent='space-between'>                        
                        <h1>Tracks list</h1>
                        <Button onClick={() => router.push('tracks/create')}>Downdload track</Button>
                    </Grid>
                    <TrackList tracks={tracks} />
                </Card>
            </Grid>
        </MainLayout>
    );
}

export default Index;
