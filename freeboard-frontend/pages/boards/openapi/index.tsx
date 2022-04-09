import OpenApiPage from '../../../src/components/units/board/openApi/list/openApi.container';
import styled from '@emotion/styled';


const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: red;
`


export default function DisneyOpenAPIPage(){


    return (
        <Wrapper>
            <OpenApiPage/>
        </Wrapper>
    )
}