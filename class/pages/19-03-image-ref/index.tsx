import { ChangeEvent, useState, useRef } from 'react';
import { gql, useMutation } from '@apollo/client';
import { IMutation, IMutationUploadFileArgs } from '../../../quiz/src/commons/types/generated/types';
import { Modal } from 'antd';
import { checkFileValidation } from '../../src/commons/libraries/validation';



const UPLOAD_FILE = gql`
    mutation uploadFile($file: Upload!){
        uploadFile(file: $file){
            url
        }
    }

`



export default function ImageValidationPage(){
    const fileRef = useRef<HTMLInputElement>(null);

    const [imageUrl, setImageUrl] = useState<string | undefined>("");

    
    // mutation 실제로 사용하기 위해서 
    const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
    >(UPLOAD_FILE)
    
    const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) =>{

        const file = event.target.files?.[0];
        console.log(file)

        const isValid = checkFileValidation(file);
        if(!isValid) return;


        try{
            const result = await uploadFile({ variables:{ file }})
            console.log(result.data?.uploadFile.url) 
    
            setImageUrl(result.data?.uploadFile.url)

        }catch(error:any){
            Modal.error({content: error.message})
        }
    }


    const onClickImage = () => {
        fileRef.current?.click();
        console.log("click!!!!")
    }

    return(
        <div>
            <div>이미지 업로드 연습하기</div>
            <div style={{width: "150px", height: "150px", backgroundColor : "gray"}} onClick={onClickImage}>
                이미지선택
            </div>
            <input style={{display: "none"}} type="file" onChange={onChangeFile}  ref={fileRef} />
            <img src={`https://storage.googleapis.com/${imageUrl}`}/>
        </div>
    )



}