import { gql, useMutation } from '@apollo/client';
import { IMutation, IMutationUploadFileArgs } from '../../../../../quiz/src/commons/types/generated/types';
import { useRef, ChangeEvent } from 'react';
import { Modal } from 'antd';
import { checkFileValidation } from '../libraries/validation';
import styled from '@emotion/styled';




const UPLOAD_FILE = gql`
mutation uploadFile($file:Upload!){
    uploadFile(file: $file){
        url
    }
}
`

interface IUploadFilePage{
    imageUpload?: any
    setImageUpload?: any
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
`

const UploadButton = styled.div`
    width: 100px;
    height: 100px;
    background-repeat: #bdbdbd;
    cursor: pointer;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    padding-top: 15px;
`

const UpImage = styled.img`
    width: 100px;
    height: 100px;
    border: 1px solid #bdbdbd;
    margin-left: 30px;
`


export default function UploadFilePage(props:IUploadFilePage) {
    const [uploadFile] = useMutation<Pick<IMutation,'uploadFile'>,IMutationUploadFileArgs>(UPLOAD_FILE)
    const fileRef = useRef<HTMLInputElement>(null)


    const onClickUpload = () => {
        fileRef.current?.click();
    }
    
    
    
    const onChangeFile = async(event: ChangeEvent<HTMLInputElement>) => {
    
        const file = event.target.files?.[0]
        console.log(file)
        
        const isValid = checkFileValidation(file);
        if(!isValid) return;
        
        
        try{
            const result =  await uploadFile({variables: {file} })
            console.log(result)
            props.setImageUpload(result.data?.uploadFile.url)
        
        }catch(error:any){
            Modal.error({content: error.message})
        }
        
        }

    return(

        <Wrapper>
            <UploadButton onClick={onClickUpload} style={{width: "100px", height: "100px", backgroundColor:"#bdbdbd"}}>
                <input type="file" onChange={onChangeFile}  style={{display: "none"}} ref={fileRef}/>
                + <br /> Upload
            </UploadButton>

            <UpImage  defaultValue={`https://storage.googleapis.com/${props.imageUpload}` || ""}/>

        </Wrapper>
    )
}