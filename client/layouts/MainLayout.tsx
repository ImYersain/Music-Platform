import Navbar from '@/components/Navbar';
import { Container } from '@material-ui/core';
import React from 'react';
import {FC} from 'react';
import Player from '../components/Player';
import Head from 'next/head';

export interface IMainLayoutProps {
    children: React.ReactNode,
    title?: string,
    description?: string,
    keywords?: string
}

const MainLayout: FC<IMainLayoutProps> = ({children,title,description,keywords}) => {
    return (
        <>  
            <Head>
                <title>{title || 'MusicPlatform'}</title>
                <meta name='description' content={'MusicPlatform. All tracks are here! ' + description} />
                <meta name='robots' content="index, follow" />
                <meta name='keywords' content={keywords || 'music, tracks, songs'} />
                <meta name='viewport' content="width=device-width, initial-scale=1" />
            </Head>
            <Navbar />
            <Container maxWidth="md" style={{margin: '90px auto'}}>
                {children} 
            </Container>
            <Player />
        </>
    );
}

export default MainLayout;
