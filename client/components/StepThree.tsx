import React, {useState} from 'react'
import FileUpload from './FileUpload';
import { Button } from '@mui/material';

const StepThree = () => {
    const [audio, setAudio] = useState(null);
    
    return (
        <div>
            <FileUpload setFile={setAudio} accept={'audio/*'}>
                <Button>Upload audio</Button>
            </FileUpload>
        </div>
    )
}

export default StepThree;
