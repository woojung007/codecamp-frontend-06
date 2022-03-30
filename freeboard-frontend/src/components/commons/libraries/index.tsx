import LayoutBanner from "./layout/banner"
import LayoutHeader from "./layout/header"
import LayoutNavigation from "./layout/navigation"
import LayoutFooter from "./layout/footer"
import styled from "@emotion/styled"
import {ReactNode} from 'react'
import { useRouter } from "next/router"
import LayoutSidebar from './layout/sidebar/index';


const BodyWrapper = styled.div`
    display: flex;
`

const Body = styled.div`
    height: auto;
    background-color: white;
`

interface ILayoutProps{
    children: ReactNode;
}


const HIDDEN_SIDEBAR = [
    "/boards",
    "/boards/new",
]


export default function Layout(props: ILayoutProps){
    const router = useRouter()
    console.log(router)

    const isHidden = HIDDEN_SIDEBAR.includes(router.asPath)

    return (
        <>
            
            <LayoutHeader />
            <LayoutBanner />
            <LayoutNavigation />
            <BodyWrapper>
            <div>
            {!isHidden &&  <LayoutSidebar />}
            </div>
            <Body>{props.children}</Body>
            </BodyWrapper>
            <LayoutFooter />
        </>
    )
}