import React, { FC, useRef } from 'react'

interface IFileUploadProps {
    setFile: Function;
    accept: string;
    children: React.ReactElement
}

const FileUpload: FC<IFileUploadProps> = ({setFile, accept, children}) => {
    const ref = useRef<HTMLInputElement>(null);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        (e.target.files?.length) && setFile(e.target.files[0]);
    } 

    return (
        <div onClick={() => ref.current?.click()}>
            <input 
                type="file"
                accept={accept}
                style={{display: 'none'}}
                ref={ref}
                onChange={onChange}
            />
            {children}
        </div>
    )
}

export default FileUpload;
