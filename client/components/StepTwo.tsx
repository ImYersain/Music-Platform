import React, {useState} from 'react'
import FileUpload from './FileUpload';
import { Button } from '@mui/material';

const StepTwo = () => {
    const [image, setImage] = useState(null);
    
    return (
        <div>
            <FileUpload setFile={setImage} accept={'image/*'}>
                <Button>Upload image</Button>
            </FileUpload>
        </div>
    )
}

export default StepTwo;
