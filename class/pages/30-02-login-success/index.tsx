import { useQuery, gql } from "@apollo/client";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginSuccessPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  // 백엔드에서 인가(토큰 확인하기)가 이루어진다

  return <div>{data?.fetchUserLoggedIn.name}님 환영합니다!!!</div>;
  // 아폴로에서 한다
}
