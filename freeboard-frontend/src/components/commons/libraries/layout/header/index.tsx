import styled from '@emotion/styled'



const Wrapper = styled.div`
    height: 70px;
    background-color: rgba(0,0,0);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 6%;
    margin: 0;

`

const Login = styled.div`
    color: #fff;
    width: 80px;
    height: 30px;
    text-align: center;
    border-radius: 5px;
    padding-top: 10px;
    margin-right: 20px;
    cursor: pointer;
    :hover{
        font-weight: bold;
        color: crimson;
    }

`

const Signup = styled.div`
    color: #fff;
    width: 80px;
    height: 30px;
    text-align: center;
    border-radius: 5px;
    padding-top: 10px;
    cursor: pointer;
    :hover{
        font-weight: bold;
        color: crimson;
    }

`




export default function LayoutHeader(){


    return (
        <Wrapper>
            <Login>Login</Login>

            <Signup>SignUp</Signup>
        </Wrapper>
    )
}