import LayoutBanner from "./banner"
import LayoutHeader from "./header"
import LayoutNavigation from "./navigation"
import LayoutFooter from "./footer"
import styled from "@emotion/styled"
import {ReactNode} from 'react'
import { useRouter } from "next/router"
// import LayoutSidebar from './sidebar/index';

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    /* position: fixed; */
`
const BodyWrapper = styled.div`
    display: flex;
    width: 100%;

`

const Body = styled.div`
    width: 100%;
    height: auto;

`

interface ILayoutProps{
    children: ReactNode;
}


const HIDDEN_BANNER = [
    "/boards/new",
    "/user/login"
]

const HIDDEN_NAV = [
    "/boards/new",
    "/user/login"
]



export default function Layout(props: ILayoutProps){
    const router = useRouter()

    let isHidden = HIDDEN_BANNER.includes(router.asPath);
        isHidden = HIDDEN_NAV.includes(router.asPath);


    // const isHidden = HIDDEN_SIDEBAR.includes(router.asPath)


    return (
        <Wrapper>
            <LayoutHeader />
            {!isHidden && <LayoutBanner />}
            {!isHidden && <LayoutNavigation />}
            <BodyWrapper>
            <div>
            {/* {!isHidden &&  <LayoutSidebar />} */}
            </div>
            <Body>{props.children}</Body>
            </BodyWrapper>
            <LayoutFooter />
        </Wrapper>
    )
}