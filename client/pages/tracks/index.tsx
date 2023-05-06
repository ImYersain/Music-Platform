import MainLayout from '@/layouts/MainLayout';
import { Button, Card, Grid, Box } from '@mui/material';
import React from 'react';
import { useRouter } from 'next/router';
import { TrackList } from '../../components/TrackList';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { fetchTracks } from '../../store/action-creators/trackThunkActionCreator';
import { NextThunkDispatch, wrapper } from '../../store/index';

const Index = () => {
    const router = useRouter();
    const {tracks, error} = useTypedSelector((state) =>  state.trackReducer);

    if(error) {
        return <MainLayout>
            <h1>{error}</h1>
        </MainLayout>
    }

    return (
        <MainLayout>
            <Grid container justifyContent='center'>
                <Card style={{width: 900}}>
                    <Grid container p={3} justifyContent='space-between'>                        
                        <h1>Tracks list</h1>
                        <Button onClick={() => router.push('tracks/create')}>Upload track</Button>
                    </Grid>
                    <TrackList tracks={tracks} />
                </Card>
            </Grid>
        </MainLayout>
    );
}

export default Index;

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(await fetchTracks());
    return {
        props: {},
      };
})
