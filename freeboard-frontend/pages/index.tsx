import styled from '@emotion/styled';
import { Button } from 'antd';


export default function LandingPage(){

    const BodyHTML = styled.button`
        width: 100%;
        display: flex;
        justify-content: center;
    `

    const StartButton = styled(Button)`
        border: 1px solid #bdbdbd;

    `

    return (
        <BodyHTML>
            <Button>Start!!</Button>
        </BodyHTML>
    )

}