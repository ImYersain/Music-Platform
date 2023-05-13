import MainLayout from '@/layouts/MainLayout';
import { Button, Card, Grid, Box, TextField } from '@mui/material';
import React, {useState} from 'react';
import { useRouter } from 'next/router';
import { TrackList } from '../../components/TrackList';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { fetchTracks, searchTracks } from '../../store/action-creators/trackThunkActionCreator';
import { NextThunkDispatch, wrapper } from '../../store/index';
import { useDispatch } from 'react-redux';


const Index = () => {
    const router = useRouter();
    const {tracks, error} = useTypedSelector((state) =>  state.trackReducer);
    const [query, setQuery] = useState('');
    const dispatch = useDispatch() as NextThunkDispatch;
    const [timer, setTimer] = useState<any>();

    const search = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        if(timer){
            clearTimeout(timer);
        } 

        setTimer(
            setTimeout(async () => {
            await dispatch(await searchTracks(e.target.value));
            }, 500)
        )
    }

    if(error) {
        return <MainLayout>
            <h1>{error}</h1>
        </MainLayout>
    }

    return (
        <MainLayout title={'Tracks/MusicPlatform'}>
            <Grid container justifyContent='center'>
                <Card style={{width: 900}}>
                    <Grid container p={3} justifyContent='space-between'>                        
                        <h1>Tracks list</h1>
                        <Button onClick={() => router.push('tracks/create')}>Upload track</Button>
                    </Grid>
                    <TextField fullWidth value={query} onChange={search} />
                    <TrackList tracks={tracks} />
                </Card>
            </Grid>
        </MainLayout>
    );
}

export default Index;

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(fetchTracks());
    return {
        props: {},
      };
})
