import Navbar from '@/components/Navbar';
import { Container } from '@material-ui/core';
import React from 'react';
import {FC} from 'react';
import Player from '../components/Player';

export interface IMainLayoutProps {
    children: React.ReactNode
}

const MainLayout: FC<IMainLayoutProps> = ({children}) => {
    return (
        <>
            <Navbar />
            <Container maxWidth="xl" style={{margin: '90px 0'}}>
                {children} 
            </Container>
            <Player />
        </>
    );
}

export default MainLayout;
