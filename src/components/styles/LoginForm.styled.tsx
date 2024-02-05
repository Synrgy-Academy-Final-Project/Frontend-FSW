import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
`;

export const LoginContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const Texth2 = styled.h2`
  color: #101012;
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
  margin-bottom: 24px;
`;


export const Texth5 = styled.h5`
  color: #3e7bfa;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-top: 0;
  margin-bottom: 6px;
`;

export const Input = styled.input`
  border-radius: 12px;
  border: 1px solid #9e9e9e;
  padding: 16px 12px;
  margin-top: 0;
  margin-bottom: 16px;
  outline: none;
`;

export const Texth4 = styled.a`
  text-decoration: none;
  width: 100%;
  color: #7b52ab;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: end;
  cursor: pointer;
  margin-top: 0;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  border-radius: 8px;
  padding: 16px;
  background-color: #3e7bfa;
  color: #fff;
  width: 100%;
  border: none;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  cursor: pointer;
  margin-bottom: 24px;
`;

export const Span = styled.a`
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #007dfa;
  cursor: pointer;
  text-align: center;
`;

export const Texth3 = styled.h3`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #bebebf;
  text-align: center;
  margin-top: 0;
`;
