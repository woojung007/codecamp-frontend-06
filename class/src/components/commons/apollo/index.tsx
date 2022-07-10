import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../commons/store/index";
import { useEffect } from "react";

export default function ApolloSetting(props) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);

  // ///////////////////////////////////////////////////////////////////
  // 1. 더이상 지원되지 않음 !!
  // if(process.browser){

  // }else{

  // }

  // 2. 두번째 방법 !!

  if (typeof window !== "undefined") {
    console.log("여기는 브라우저다!!!!!");
    // const mylocalstorageAccessToken = localStorage.getItem("accessToken")
    // setAccessToken(mylocalstorageAccessToken || "")
  } else {
    console.log("여기는 프론트엔드 서버 yarn dev다!!!!!");
  }

  // 3. 세번째 방법 !!
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    setAccessToken(accessToken || "");
    setUserInfo(userInfo || "");
  }, []);

  // 4. 프리렌더링시 문제되는 코드 !!
  // const mylocalstorageAccessToken = localStorage.getItem("accessToken")
  // setAccessToken(mylocalstorageAccessToken || "")
  // // 있으면 넣어주고 없으면 초기값 빈문자열 넣어줘

  // ///////////////////////////////////////////////////////////////////

  const uploadLink = createUploadLink({
    uri: "https://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
