import styled from "styled-components";

export const Title = styled.h2`
  margin-top: 80px;
  color: #095aca;
  font-size: 30px;
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;
  width: 500px;
  height: 700px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 10px;
`;

export const NameInput = styled.input`
  font-size: 17px;
  margin-top: 80px;
  width: 400px;
  height: 35px;
  outline: none;
  border: 0;
  border-bottom: 1px solid #4080d8;
  &:hover {
    border-bottom: 1px solid #095aca;
  }
`;

export const IdInput = styled.input`
  font-size: 17px;
  width: 400px;
  height: 35px;
  outline: none;
  border: 0;
  border-bottom: 1px solid #4080d8;
  &:hover {
    border-bottom: 1px solid #095aca;
  }
`;

export const Password = styled.input`
  font-size: 17px;
  width: 400px;
  height: 35px;
  outline: none;
  border: 0;
  border-bottom: 1px solid #4080d8;
  &:hover {
    border-bottom: 1px solid #095aca;
  }
`;

export const Submit = styled.button`
  width: 450px;
  font-size: 20px;
  height: 50px;
  outline: none;
  border: 0;
  border-radius: 10px;
  background-color: #7eaae6;
  font-weight: 700;
  color: #ffffff;
  > a {
    color: #ffffff;
  }
`;
