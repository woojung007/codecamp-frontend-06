import { useState, useEffect } from 'react';






export default function OpenAPIQuizPage(){
    const [dogUrl, setDogUrl] =useState("")


    useEffect(()=>{
        const dog = async() => {
            const result = await axios.get("https://dog.ceo/dog-api/")
            setDogUrl(result.data.message)
        };
        dog()
    },[])

    return(
        <>
            <img src={dogUrl}/>
        </>
    )
}