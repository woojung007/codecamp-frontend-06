import styled from '@emotion/styled'



const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 70px;
background-color: black;
`
const NavWrapper = styled.div`
display: flex;
justify-content: space-between;
width: 50vw;
`

const Nav = styled.div`
color: #BDBDBD;
padding: 0 30px;
:hover{
    color: #fff;
    cursor: pointer;
    font-weight: bold;

}
`

const NavSpan = styled.div`
color: #BDBDBD;
font-weight: lighter;
`

export default function LayoutNavigation(){



    return (
        <Wrapper>

            <NavWrapper>
                
                <Nav>
                    자유게시판
                </Nav>

                <NavSpan> | </NavSpan>

                <Nav>
                    중고마켓
                </Nav>

                <NavSpan> | </NavSpan>

                <Nav>
                    마이페이지
                </Nav>
            </NavWrapper>

        </Wrapper>

    )
    
    

}