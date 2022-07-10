import { Modal } from "antd";
import { useApolloClient, useMutation } from "@apollo/client";
import { LOGIN_USER, FETCH_USER_LOGGED_IN } from "./login.queries";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../store/index";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IPropsIsActive {
  isActive: boolean;
}

const BodyHTML = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #8c775e;
  padding-top: 100px;
`;

const Wrapper = styled.div`
  width: 36%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  color: #fdf5ec;
`;

const LoginError = styled.div`
  color: #f0f2ae;
  margin-bottom: 10px;
  padding-left: 15px;
`;

const CheckDiv = styled.div`
  padding: 2%;
`;

const LoginInput = styled.input`
  width: 90%;
  border: 1px solid #fdf5ec;
  border-radius: 16px;
  background-color: #8c775e;
  line-height: 40px;
  padding: 2%;
  margin-bottom: 4%;
  color: #fdf5ec;
  ::placeholder {
    color: #fdf5ec;
  }
`;

const LoginBtn = styled.button`
  width: 90%;
  height: 10vh;
  background-color: ${(props: IPropsIsActive) =>
    props.isActive ? "#fdf5ec" : "#8C775E"};
  color: ${(props: IPropsIsActive) => (props.isActive ? "#8C775E" : "#fdf5ec")};
  text-align: center;
  border-radius: 16px;
  border: 1px solid #fdf5ec;
`;

const LoginWrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
  color: #fdf5ec;
`;

const TextSpan = styled.span`
  color: #fdf5ec;
  cursor: pointer;
`;

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다")
    .required("이메일은 필수 입력 사항입니다"),

  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%#?&])[A-Za-z\d$@$!%*#?&]{1,8}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함한 8자리 이내 문자열이어야 합니다"
    )
    .required("비밀번호는 필수 입력 사항입니다"),
});

export default function LoginContainer() {
  const router = useRouter();
  const client = useApolloClient();
  const [loginUser] = useMutation(LOGIN_USER);
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const LogInUser = async (data: any) => {
    try {
      const result = await loginUser({
        variables: { ...data },
      });
      const accessToken = result.data.loginUser.accessToken;
      console.log(accessToken);

      const resultUserInfo = await client.query({
        query: FETCH_USER_LOGGED_IN,
        context: {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      });

      const userInfo = resultUserInfo.data.fetchUserLoggedIn;
      console.log(userInfo);
      setAccessToken(accessToken);

      Modal.success({ content: "로그인 되었습니다" });
      router.push("/user/myPage");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const moveToSignUp = () => {
    router.push("/user/signup");
  };

  return (
    <BodyHTML>
      <Wrapper>
        <form onSubmit={handleSubmit(LogInUser)}>
          <LoginInput
            {...register("email")}
            type="text"
            placeholder="이메일을 입력해주세요."
          />
          <LoginError>{formState.errors.email?.message}</LoginError>
          <LoginInput
            {...register("password")}
            type="password"
            placeholder="비밀번호를 입력해주세요."
          />
          <LoginError>{formState.errors.password?.message}</LoginError>

          <CheckDiv>
            <input type="radio" defaultChecked style={{ marginRight: 15 }} />
            <TextSpan>로그인 상태 유지</TextSpan>
          </CheckDiv>

          <div></div>

          <LoginWrapper>
            <TextSpan>이메일 찾기</TextSpan>|<TextSpan>비밀번호 찾기</TextSpan>|
            <TextSpan onClick={moveToSignUp}>회원가입</TextSpan>
          </LoginWrapper>

          <LoginBtn isActive={formState.isValid}>로그인하기</LoginBtn>
        </form>
      </Wrapper>
    </BodyHTML>
  );
}
