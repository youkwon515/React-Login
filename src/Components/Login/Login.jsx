import { useState } from "react";
import * as S from "./styled";
import { Link } from "react-router-dom";

function Login({ onClick }) {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const onvalue = () => {
    if (name.trim().length < 2 || name.trim().length > 5) {
      alert("NAME: 2글자 이상, 5글자 이하, 특수문자 없이 입력 ");
      return;
    }
    if (id.trim().length < 4) {
      alert("ID: 4글자 이상 입력");
      return;
    }
    if (password.trim().length < 8) {
      alert("PASSWORD: 4글자 이상 입력");
      return;
    }
    onClick({
      name: name.trim(),
      id: id.trim(),
      password: password.trim(),
    });
  };

  const handleValue = (e) => {
    if (e.target.name === "이름") {
      setName(e.target.value);
    } else if (e.target.name === "아이디") {
      setId(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };
  return (
    <S.LoginBox>
      <S.Title>로그인</S.Title>
      <S.NameInput
        name="이름"
        value={name}
        onChange={handleValue}
        placeholder="이름을 입력해주세요!"
      />
      <S.IdInput
        name="아이디"
        value={id}
        onChange={handleValue}
        placeholder="아이디을 입력해주세요!"
      />
      <S.Password
        onChange={handleValue}
        value={password}
        type="password"
        placeholder="비밀번호를 입력해주세요!"
      />
      <S.Submit onClick={onvalue}>
        <Link to="/home">만들기</Link>
      </S.Submit>
    </S.LoginBox>
  );
}

export default Login;
