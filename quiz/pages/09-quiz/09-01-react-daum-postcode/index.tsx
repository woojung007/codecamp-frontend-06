import DaumPostcode from 'react-daum-postcode';


export default function ReactDaumPostcodePage(){


    const handleComplete = (data: any) => {
    }


    return (
        <DaumPostcode onComplete={handleComplete}/>

    )
}