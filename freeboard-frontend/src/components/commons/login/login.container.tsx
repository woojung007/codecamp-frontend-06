import LoginPresenter from "./login.presenter";
import { useState, ChangeEvent } from 'react';
import { Modal } from 'antd';
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from './login.queries';

export default function LoginContainer(){

const [email,setEmail] = useState("");
const [password, setPassword] = useState("");

const [emailError, setEmailError] = useState("");
const [passwordError, setPasswordError] = useState("");

// const [loginUser] = useMutation(LOGIN_USER);



const onChangeEmail = (event:ChangeEvent<HTMLInputElement>) =>{
    setEmail(event.target.value)

    if(!(/^\w+@\w+\.[a-zA-Z]{2,3}$/.test(event.target.value))){
        setEmailError("이메일이 올바르지 않습니다")
    }else{
        setEmailError("")
    }
    
}


const onChangePassword = (event:ChangeEvent<HTMLInputElement>) =>{
    setPassword(event.target.value)
}




const onClickLogin =  () => {

    if(password === "" || password.length <= 8){
        setPasswordError("비밀번호가 올바르지 않습니다");
    }else{
        setPasswordError("")
    }



// try{
//     const result = await loginUser({
//         variables: {
//             password,
//             email
//         }
//     });

// }catch(error){
// }



    if(email !== "" && password !== ""){
        Modal.success({content: "로그인 되었습니다"})
    }
}






    return (
        <
        LoginPresenter  
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}
        onClickLogin={onClickLogin}

        emailError={emailError}
        passwordError={passwordError}

    />
    )
}