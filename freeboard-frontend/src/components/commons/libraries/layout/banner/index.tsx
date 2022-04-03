import styled from '@emotion/styled'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


//yarn install slick-carousel

const Wrapper = styled.div`
    background-color: pink;
    height: 500px;


`


const SimpleSlider = styled(Slider)`
    .slick-slide div{
        outline: none;
        cursor: pointer;
        height: 500px;
        background-image: url("/images/banner.jpeg") ;
        background-size: cover;
        background-repeat: no-repeat;
    }
    

`



export default function Sliders(){

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        };
    

        return (
            <Wrapper>
                <SimpleSlider {...settings}>
                    
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>


                </SimpleSlider>
            </Wrapper>
        );
    
    }


