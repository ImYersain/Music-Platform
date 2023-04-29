import MainLayout from '@/layouts/MainLayout';
import { Button, Card, Grid, Box } from '@mui/material';
import React from 'react';
import { useRouter } from 'next/router';
import { ITrack } from '../../types/tracks';
import { TrackList } from '../../components/TrackList';

const Index = () => {
    const router = useRouter();
    const tracks: ITrack[] = [
        {_id: '1', artist: 'Zayn', text: 'I dont wanna live forever', audio: 'https://localhost:5000/5133a554-3789-473c-a04e-8f929dd83221.mp3', picture: 'https://localhost:5000/28ebfcd5-0da4-4f2d-ae23-d4e942f6b398.jpg', comments: [{_id: '1', username: 'John', text: 'So so beatiful song!'}], listens: 3, name: 'Baby'},

        {_id: '2', artist: 'BTR', text: 'We are', audio: 'https://localhost:5000/5133a554-3789-473c-a04e-8f929dd83221.mp3', picture: 'https://localhost:5000/28ebfcd5-0da4-4f2d-ae23-d4e942f6b398.jpg', comments: [{_id: '1', username: 'John', text: 'So so beatiful song!'}], listens: 3, name: 'Baby'},

        {_id: '3', artist: 'Scriptonite', text: 'VCVBBB', audio: 'https://localhost:5000/5133a554-3789-473c-a04e-8f929dd83221.mp3', picture: 'https://localhost:5000/28ebfcd5-0da4-4f2d-ae23-d4e942f6b398.jpg', comments: [{_id: '1', username: 'John', text: 'So so beatiful song!'}], listens: 3, name: 'Baby'}
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
