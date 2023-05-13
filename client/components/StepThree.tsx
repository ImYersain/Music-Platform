import React, {useState, FC} from 'react'
import FileUpload from './FileUpload';
import { Button } from '@mui/material';

interface IStepThreeProps {
    setAudio: React.Dispatch<React.SetStateAction<null>>
}
const StepThree: FC<IStepThreeProps> = ({setAudio}) => {
    
    return (
        <div>
            <FileUpload setFile={setAudio} accept={'audio/*'}>
                <Button>Upload audio</Button>
            </FileUpload>
        </div>
    )
}

export default StepThree;
