import styled from '@emotion/styled';
import { withAuth } from '../src/components/commons/hocs/withAuth';
// import { Button } from 'antd';



function LandingPage(){

    const BodyHTML = styled.div`
        width: 100%;
        display: flex;
        justify-content: center;
    `



    return (
        <BodyHTML>
            <div>Start!!</div>
        </BodyHTML>
    )

}

export default withAuth(LandingPage)
