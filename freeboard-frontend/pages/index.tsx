import styled from '@emotion/styled';
import { Button } from 'antd';


export default function LandingPage(){

    const BodyHTML = styled.button`
        width: 100vw;
        height: 90vh;
        display: flex;
        justify-content: center;
    `

    const StartButton = styled(Button)`
        width: 30vw;
        border: 1px solid #bdbdbd;

    `

    return (
        <BodyHTML>
            <Button>Let's Start</Button>
        </BodyHTML>
    )

}