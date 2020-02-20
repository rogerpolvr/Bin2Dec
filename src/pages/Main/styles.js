import styled from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;
  border-radius: 5px;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  svg {
    color: #fff;
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
    margin: 10px;
  }
`;

export const SubmitButton = styled.button`
  background: #333030;
  border: 0;
  padding: 0 15px;
  margin: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background: #494646;
  }
`;
