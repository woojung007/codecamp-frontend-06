import styled from '@emotion/styled'



const Wrapper = styled.div`
    height: 100px;
    background-color: black;
    display: flex;
    justify-content: flex-end;
    padding-top: 30px;
    padding-right: 30px;
`

const Login = styled.div`
    background-color: #fff;
    width: 80px;
    height: 50px;
    text-align: center;
    border-radius: 5px;
    padding-top: 10px;
    margin-right: 20px;
    cursor: pointer;
    :hover{
        
    }

`

const Signup = styled.div`
    background-color: #fff;
    width: 80px;
    height: 50px;
    text-align: center;
    border-radius: 5px;
    padding-top: 10px;
    cursor: pointer;

`




export default function LayoutHeader(){


    return (
        <Wrapper>
            <Login>Login</Login>

            <Signup>SignUp</Signup>
        </Wrapper>
    )
}