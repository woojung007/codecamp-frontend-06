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
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

export default function ApolloSetting(props) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  // const [, setUserInfo] = useRecoilState(userInfoState);

  // ///////////////////////////////////////////////////////////////////
  // 1. 더이상 지원되지 않음 !!
  // if(process.browser){

  // }else{

  // }

  // 2. 두번째 방법 !!

  // if (typeof window !== "undefined") {
  //   console.log("여기는 브라우저다!!!!!");
  //   // const mylocalstorageAccessToken = localStorage.getItem("accessToken")
  //   // setAccessToken(mylocalstorageAccessToken || "")
  // } else {
  //   console.log("여기는 프론트엔드 서버 yarn dev다!!!!!");
  // }

  // 3. 세번째 방법 !!
  useEffect(() => {
    //   const accessToken = localStorage.getItem("accessToken");
    //   const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    //   setAccessToken(accessToken || "");
    //   setUserInfo(userInfo || "");
    // ///////////////////////////////////////////////////////////////////
    // accessToken 재발급받아서 state에 넣어주기
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  // 4. 프리렌더링시 문제되는 코드 !!
  // const mylocalstorageAccessToken = localStorage.getItem("accessToken")
  // setAccessToken(mylocalstorageAccessToken || "")
  // // 있으면 넣어주고 없으면 초기값 빈문자열 넣어줘

  // ///////////////////////////////////////////////////////////////////

  // //////////////////////////////////////////operation - 실패했던 쿼리 /// forward - 전송해줘
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1-1. 에러를 캐치
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1-2. 해당 에러가 토큰만료 에러인지 체크(UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          // 2-1. refreshToken으로 accessToken을 재발급 받기
          getAccessToken().then((newAccessToken) => {
            // 2-2. 재발급 받은 accessToken 저장하기
            setAccessToken(newAccessToken);

            // 3-1. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기

            // 이 쿼리에서 추가 옵션들을 가져와
            // operation.getContext().headers

            // context의 headers 조작할 수 있다
            operation.setContext({
              headers: {
                // accessToken 만 바꿔치기 - 다른 것도 있을 경우를 대비해서
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}`,
              },
            });
            // 3-2. 변경된 operation 재요청하기
            return forward(operation);
          });
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend06.codebootcamp.co.kr/graphql22",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
