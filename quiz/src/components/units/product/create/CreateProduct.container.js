import {useState} from 'react'
import {useMutation} from '@apollo/client'
import {useRouter} from 'next/router' 
import CreateProductUI from './CreateProduct.presenter'
import { CREATE_PRODUCT,UPDATE_PRODUCT } from './CreateProduct.queries'



export default function CreateProduct(props){

    const router = useRouter()

    const [seller, setSeller] = useState("")
    const [name, setName] = useState("")
    const [detail, setDetail] = useState("")
    const [price, setPrice] = useState("")

    const [createProduct] = useMutation(CREATE_PRODUCT)
    const [updateProduct] = useMutation(UPDATE_PRODUCT)

    const onClickCreate = async() => {
    try{
            const result = await createProduct({
                variables: { 
                seller: seller,
                createProductInput: {
                name: name,
                detail: detail,
                price: price
                }
            } 
        })

    console.log(result.data.createProduct._id)
    alert("게시글 등록에 성공했습니다!")
    alert("상세페이지로 이동합니다!")

    router.push(`/07-boards/${result.data.createProduct._id}`)

}catch(error){
        // alert(error.message)
    }
}


    const onClickUpdate = async () => {
        await updateProduct({
            variables:{productId: router.query.productId,updateProductInput:{name,detail,price}}
            })
            router.push(`/07-boards/${router.query.productId}`)
    }

    const onChangeSeller = (e) => {
        setSeller(e.target.value)
    }

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangeDetail = (e) => {
        setDetail(e.target.value)
    }

    const onChangePrice = (e) => {
        setPrice(parseInt(e.target.value))
    }


return <CreateProductUI
onChangeSeller={onChangeSeller}
onChangeName={onChangeName}
onChangeDetail={onChangeDetail}
onChangePrice={onChangePrice}
onClickCreate={onClickCreate}
isEdit={props.isEdit}
onClickUpdate={onClickUpdate}

/>





}
