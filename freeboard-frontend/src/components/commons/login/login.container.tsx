import LoginPresenter from "./login.presenter";
import { useState, ChangeEvent } from 'react';
import { Modal } from 'antd';
import { useApolloClient, useMutation } from '@apollo/client';
import { LOGIN_USER, FETCH_USER_LOGGED_IN } from './login.queries';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { accessTokenState, userInfoState } from '../../../commons/store/index';


export default function LoginContainer(){

const router = useRouter();
const [email,setEmail] = useState("");
const [password, setPassword] = useState("");
const [emailError, setEmailError] = useState("");
const [passwordError, setPasswordError] = useState("");

const [loginUser] = useMutation(LOGIN_USER);
const [, setAccessToken] = useRecoilState(accessTokenState);
const [, setUserInfo] = useRecoilState(userInfoState);

const client = useApolloClient()


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
    if(!(/^\w[a-zA-Z0-9]{7,16}$/.test(event.target.value))){
        setPasswordError("비밀번호가 올바르지 않습니다")
    }else{
        setPasswordError("")
    }
}


const onClickLogIn = async () => {

    if(password === "" && password.length < 8){
        setPasswordError("비밀번호가 올바르지 않습니다");
    }else{
        setPasswordError("")
    }

try{
    const result = await loginUser({
        variables: {
            password,
            email
        }
    });
    const accessToken = result.data.loginUser.accessToken;
    console.log(accessToken);

    const resultUserInfo = await client.query({
        query: FETCH_USER_LOGGED_IN,
        context:{
        headers:{
        Authorization: `Bearer ${accessToken}`,
        },
    }
    });

    const userInfo = resultUserInfo.data.fetchUserLoggedIn
    console.log(userInfo);

    setAccessToken(accessToken);
    setUserInfo(userInfo)
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));

    Modal.success({content: "로그인 되었습니다"})
    router.push("/user/login-success")


}catch(error){
}

}


    return (
        <
        LoginPresenter  
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}
        onClickLogIn={onClickLogIn}

        emailError={emailError}
        passwordError={passwordError}
    />
    )
}