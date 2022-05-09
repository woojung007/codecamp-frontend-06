
import { useForm } from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup"
import Input01 from '../../src/components/commons/inputs/01/index';
import Button01 from '../../src/components/commons/buttons/01/index';
import styled from "@emotion/styled"


const schema = yup.object({

  // 아래 schema는 컴포넌트 분리시 .validation.ts 파일을 
  email: yup
  .string()
  .email("이메일 형식이 적합하지 않습니다")
  .required("이메일은 필수 입력 사항입니다"),
  password: yup
  .string()
  .min(4, "비밀번호는 최소 4자리 이상 입력해 주세요 ")
  .max(15,"비밀번호는 최대 15자리로 입력해 주세요")
  .required("비밀번호는 필수 입력 사항입니다")
})



interface IFormValues{
  email?:string
  password?:string
}



const Errors = styled.div`
  color: red;
  font-size:11px;
`


export default function ReactHookFormPage() {

  const {register, handleSubmit, formState} = useForm({
    resolver: yupResolver(schema),
    mode: "onChange"
  });


  const onClickSubmit = (data: IFormValues) => {
    console.log(data)
    alert("로그인되었습니다")
  }


  

  return(
    <form onSubmit={handleSubmit(onClickSubmit)}>

      {/* email: <input type="text" {...register("email")}/> */}
      email : <Input01 type="text" register={register("email")} />
      <Errors>{formState.errors.email?.message}</Errors>

      {/* password: <input type="text" {...register("password")}/> */}
      password : <Input01 type="password" register={register("password")} />
      <Errors>{formState.errors.password?.message}</Errors>


      {/* <LoginBtn isActive={formState.isValid}>login</LoginBtn> */}
      <Button01 isActive={formState.isValid} title={"로그인하기"} />
    </form>
  )
}
