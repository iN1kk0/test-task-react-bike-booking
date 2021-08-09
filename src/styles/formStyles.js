import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0 5px 0;
`;

export const Input = styled.input`
  display: flex;
  flex-direction: row;
  padding: 5px 16px;
  background: #e8e8e8;
  border-radius: 5px;
  border: none;
  margin: 5px 10px;
  flex: 1 1 auto;
`;

export const Textarea = styled.textarea`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 5px 16px;
  background: #e8e8e8;
  border-radius: 5px;
  margin: 5px 10px;
  border: none;
  flex: 0 1 100%;
`;

export const Button = styled.input`
  display: flex;
  padding: 4px 22px;
  background: #696969;
  border-radius: 5px;
  margin: 5px 10px;
  flex: 0 1 auto;
  color: white;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
`;
