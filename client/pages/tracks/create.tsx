import MainLayout from '@/layouts/MainLayout';
import React,{useState} from 'react';
import StepWrapper from '../../components/StepWrapper';
import { Button, Grid } from '@mui/material';
import StepOne from '@/components/StepOne';
import StepTwo from '../../components/StepTwo';
import StepThree from '../../components/StepThree';

const Create = () => {
    const [activeStep, setActiveStep] = useState<number>(0);

    const onNextStep = () => {
        setActiveStep(prev => prev + 1)
    }
    const onPrevStep = () => {
        setActiveStep(prev => prev - 1)
    }

    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 && 
                    <StepOne />
                }
                {activeStep === 1 && 
                    <StepTwo />
                }
                {activeStep === 2 && 
                    <StepThree />
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
