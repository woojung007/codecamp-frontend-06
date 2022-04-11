import { ILoginPresenter } from './login.types';
import styled from '@emotion/styled';


const LoginError = styled.div`
    color: red;
`



export default function LoginPresenter(props:ILoginPresenter){



    return (
        <div>
            이메일 : <input onChange={props.onChangeEmail}  type="text"  placeholder='이메일을 입력해주세요.' />
            <LoginError>{props.emailError}</LoginError>
            비밀번호 : <input onChange={props.onChangePassword}  type="text"  placeholder='비밀번호를 입력해주세요.' />
            <LoginError>{props.passwordError}</LoginError>

            <div>
                <input type="radio" checked/> 
                <span>로그인 상태 유지</span>
            </div>
            
            <button onClick={props.onClickLogin}>로그인하기</button>

            <div></div>
        </div>
    )
}