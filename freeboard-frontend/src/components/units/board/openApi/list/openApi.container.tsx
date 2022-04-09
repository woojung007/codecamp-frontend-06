import axios from 'axios'
import { useEffect, useState } from 'react';
import styled from "@emotion/styled";


const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: row;
background-color: blue;

`;


const DisneyImg = styled.img`
width: 100px;
height: 100px;
/* background-color: blue; */
`;



export default function OpenApiPage(){
    const [imgUrls, setImgUrls] = useState<string[]>([]);

    useEffect(() => {
        const getOpenApi = async() => {
            new Array(9).fill(1).map(async(_) => {
                const result:any = await axios.get(
                    'https://api.disneyapi.dev/characters'
                );
                console.log(result.data.data)
                setImgUrls(result.data.data);
            });
        };
        getOpenApi();
    },[]);



    return(
        <Wrapper>
            <div>
                {imgUrls.map((el:any,index:number) => (
                    <div key={el._id}>
                        <DisneyImg  src={el.imageUrl}/>
                        {(index + 1) % 3 === 0 && <br />}
                    </div>
                ))}
            </div>
        </Wrapper>
    )
}