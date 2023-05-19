import styled from "styled-components";

export const HomeBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;
  width: 500px;
  height: 300px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 10px;
  overflow: hidden;
`;

export const Hello = styled.h2`
  margin-top: 90px;
  color: #4080d8;
  > a {
    color: #095aca;
  }
`;

export const Logout = styled.button`
  display: flex;
  position: absolute;
  right: 0;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  width: 100px;
  height: 30px;
  color: #095aca;
  outline: none;
  border: 0;
  background-color: #ffffff;
  > a {
    color: #095aca;
  }
`;
