import React, {useState, FC} from 'react'
import { ITrack } from '../../types/tracks';
import MainLayout from '@/layouts/MainLayout';
import { useRouter } from 'next/router';
import { Button, TextField, Grid, Box } from '@mui/material';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { useInput } from '../../hooks/useInput';

const TrackPage: FC<any> = ({serverTrack}) => {
    const router = useRouter();
    const [track, setTrack] = useState<ITrack>(serverTrack);
    const username = useInput('');
    const commentText = useInput('');

    const addComment = async () => {
        try {
            const response = await axios.post('http://localhost:5000/tracks/comment', {
            username: username.value,
            text: commentText.value,
            trackId: track._id
        })

        setTrack({...track, comments: [...track.comments, response.data]});
        username.clearValue();
        commentText.clearValue();

        } catch (error) {
          console.log(error);  
        }
    }
    
    return (
        <MainLayout title={'MusicPlatform/' + track.name}>
                <Button variant={'outlined'} style={{fontSize: 16, marginBottom: 20}} onClick={() => router.push('/tracks')}>Back to track list</Button>
                <Grid container>
                    <img src={'http://localhost:5000/' + track.picture} width={'200px'} height={'200px'} />
                    <div style={{marginLeft: 30}}>
                        <h1>Song: {track.name}</h1>
                        <h2>Singer: {track.artist}</h2>
                        <h3>Auditions: {track.listens}</h3>
                    </div>
                </Grid>
                <h2>Lyrics</h2>
                <p>{track.text}</p>
                <h2>Comments:</h2>
                <Box marginBottom={5}>
                    {track.comments.map(comment => 
                        <Box marginBottom={1}>
                            <span style={{color:'green'}}><b>{comment.username}</b></span>: {comment.text}
                        </Box>
                    )}
                </Box>
                <Grid container>
                    <TextField label='Your name' fullWidth {...username} style={{marginBottom: '10px'}} />
                    <TextField label='Comment' fullWidth multiline rows={4} {...commentText} style={{marginBottom: '10px'}} />
                    <Button onClick={addComment} variant="outlined">Send</Button>
                </Grid>
        </MainLayout>
    )
}

export default TrackPage;


export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const response = await axios.get('http://localhost:5000/tracks/' + params?.id)

    return {
        props: {
            serverTrack: response.data
        }
    }
}