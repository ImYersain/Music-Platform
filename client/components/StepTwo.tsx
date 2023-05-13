import React, {useState, FC} from 'react'
import FileUpload from './FileUpload';
import { Button } from '@mui/material';

interface IStepTwoProps {
    setImage: React.Dispatch<React.SetStateAction<null>>
}

const StepTwo: FC<IStepTwoProps> = ({setImage}) => {
    
    return (
        <div>
            <FileUpload setFile={setImage} accept={'image/*'}>
                <Button>Upload image</Button>
            </FileUpload>
        </div>
    )
}

export default StepTwo;
