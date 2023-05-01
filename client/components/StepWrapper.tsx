import React, { FC } from 'react'
import { Container } from '@material-ui/core';
import { Card, Grid, Step, StepLabel, Stepper } from '@mui/material';

interface IStepWrapperProps {
    activeStep: number;
    children: React.ReactElement
}


const StepWrapper: FC<IStepWrapperProps> = ({activeStep, children}) => {
    const steps = ['Info about track', 'Upload track image', 'Upload track'];

    return (
        <Container>
            <Stepper activeStep={activeStep}>
                {steps.map((step, i) => 
                    <Step key={i} completed={activeStep > i}>
                        <StepLabel>{step}</StepLabel>
                    </Step>
                )}
            </Stepper>
            <Grid container justifyContent="center" style={{margin: '70px 0', height: '270px'}}>
                <Card style={{width: '600px'}}>
                    {children}
                </Card>
            </Grid>
        </Container>
    )
}

export default StepWrapper; 
