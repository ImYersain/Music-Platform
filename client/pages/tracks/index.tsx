import MainLayout from '@/layouts/MainLayout';
import { Button, Card, Grid, Box } from '@mui/material';
import React from 'react';
import { useRouter } from 'next/router';

const Index = () => {
    const router = useRouter();
    return (
        <MainLayout>
            <Grid container justifyContent='center'>
                <Card style={{width: 900}}>
                    <Grid container p={3} justifyContent='space-between'>                        
                        <h1>Tracks list</h1>
                        <Button onClick={() => router.push('tracks/create')}>Downdload track</Button>
                    </Grid>
                </Card>
            </Grid>
        </MainLayout>
    );
}

export default Index;
