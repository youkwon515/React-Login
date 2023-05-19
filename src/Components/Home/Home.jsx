import { Link } from "react-router-dom";
import * as S from "./styled";

function Home({ values }) {
  return (
    <S.HomeBox>
      {values.name && (
        <S.Logout>
          <Link to="/">Logout</Link>
        </S.Logout>
      )}
      {values.name ? (
        <S.Hello>
          안녕하세요 "{values.id}({values.name})"님
        </S.Hello>
      ) : (
        <S.Hello>
          <Link to="/">로그인</Link> 해주세요
        </S.Hello>
      )}
    </S.HomeBox>
  );
}

export default Home;
