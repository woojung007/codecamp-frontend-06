import styled from '@emotion/styled'

export const Wrapper = styled.div`
    
    width: 540px;
    height: 960px;
    background: #FFFFFF;
    border: 1px solid #AACDFF;
    box-shadow: 7px 7px 39px rgba(0, 104, 255, 0.25);
    border-radius: 20px;

    position: absolute;
    top: 60px;
    left: 625px;

    display: flex;
    flex-direction: column;
    align-items: center;
    `

export const WrapperTitle = styled.div`
    width: 380px;
    height: 47px;
    font-weight: bold;
    font-size: 32px;
    line-height: 47px;
    color: #0068FF;

    margin-top: 40px;
    margin-bottom: 30px;
    `

export const InputDiv = styled.div`
        width: 380px;
        height: 300px;
        margin-bottom: 25px;
    `

export const SignUpInput = styled.input`
        width: 100%;
        height: 60px;
        border: 1px solid #0068FF;
        box-sizing: border-box;
        border-radius: 7px;
        line-height: 24px;
        color: #797979;
        font-size: 16px;
        margin-bottom: 8px;
    `

export const SignUpBtn = styled.button`
    width: 380px ;
    height: 75px;
    box-sizing: border-box;
    border-radius: 10px;
    background: #fff;
    text-align: center;
    font-size: 18px; 
    line-height: 27px;
    position: absolute;
    bottom: 30px;
    display: block;

    `
    
export const ErrorDiv = styled.div`
color: red;
font-size: 14px;
padding-bottom: 20px;

`
