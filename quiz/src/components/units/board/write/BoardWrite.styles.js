import styled from '@emotion/styled'

export const SubmitButton = styled.button`
    background-color: ${(props) => props.isActive ? "yellow" : "none" };
`

export const WriterInput = styled.input`
    border-color: green;
`
export const TitleInput = styled.input`
    border-color: yellow;
`
export const ContentInput = styled.input`
    border-color: blue;
`
