import MainLayout from '@/layouts/MainLayout';
import React,{useState} from 'react';
import StepWrapper from '../../components/StepWrapper';
import { Button, Grid } from '@mui/material';
import StepOne from '@/components/StepOne';
import StepTwo from '../../components/StepTwo';
import StepThree from '../../components/StepThree';
import { useInput } from '../../hooks/useInput';
import axios from 'axios';
import { useRouter } from 'next/router';

const Create = () => {
    const [activeStep, setActiveStep] = useState<number>(0);
    const nameOfTrack = useInput('');
    const singerOfTrack = useInput('');
    const lyricsOfTrack = useInput('');
    const [audio, setAudio] = useState(null);
    const [image, setImage] = useState(null);
    const router = useRouter();

    const onNextStep = () => {
        if(activeStep !== 2) {
            setActiveStep(prev => prev + 1)
        } else {
            const formData = new FormData();
            formData.append('name', nameOfTrack.value);
            formData.append('artist', singerOfTrack.value);
            formData.append('text', lyricsOfTrack.value);
            //@ts-ignore
            formData.append('picture', image);
            //@ts-ignore
            formData.append('audio', audio);
            
            axios.post('http://localhost:5000/tracks', formData)
                .then(res => router.push('/tracks'))
                .catch(e => console.log(e))
        }
    }
    const onPrevStep = () => {
        setActiveStep(prev => prev - 1)
    }

    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 && 
                    <StepOne nameOfTrack={nameOfTrack} singerOfTrack={singerOfTrack} lyricsOfTrack={lyricsOfTrack} />
                }
                {activeStep === 1 && 
                    <StepTwo setImage={setImage} />
                }
                {activeStep === 2 && 
                    <StepThree setAudio={setAudio} />
                }
            </StepWrapper>
            <Grid style={{marginTop: '200px'}} container justifyContent="center">
                <Button disabled={activeStep === 0} onClick={onPrevStep}>Back</Button>
                <Button disabled={activeStep === 3} onClick={onNextStep}>Next step</Button>
            </Grid>
        </MainLayout>
    );
}

export default Create;
