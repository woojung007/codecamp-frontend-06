import { ILoginPresenter } from './login.types';
import styled from '@emotion/styled';



const BodyHTML = styled.div`
        width: 100%;
    height: 100vh;
    background-color: black;
    color: #fff;
`

const Wrapper = styled.div`
width: 40%;
margin: 0 auto;
/* background-color: gray; */
display: flex;
flex-direction: column;
`


const LoginError = styled.div`
    color: red;
`

const CheckDiv = styled.div`
    padding: 2%;
`

const LoginInput = styled.input`
    width: 90%;
    border: 1px solid #bdbdbd;
    border-radius: 16px;
    background-color: black;
    line-height: 40px;
    padding: 2%;
    margin-bottom: 4%;
`

const LoginBtn = styled.button`
    width: 90%;
    height: 10vh;
    background-color: gray;
    color: black;
    text-align:center;
    border-radius: 16px;
    border: none;
`


export default function LoginPresenter(props:ILoginPresenter){



    return (
        <BodyHTML>
            <Wrapper>
                <LoginInput onChange={props.onChangeEmail}  type="text"  placeholder='이메일을 입력해주세요.' />
                <LoginError>{props.emailError}</LoginError>
                <LoginInput onChange={props.onChangePassword}  type="text"  placeholder='비밀번호를 입력해주세요.' />
                <LoginError>{props.passwordError}</LoginError>

                <CheckDiv>
                    <input type="radio" checked/> 
                    <span>로그인 상태 유지</span>
                </CheckDiv>
                
                <LoginBtn onClick={props.onClickLogin}>로그인하기</LoginBtn>

                <div></div>
            </Wrapper>
        </BodyHTML>
    )
}