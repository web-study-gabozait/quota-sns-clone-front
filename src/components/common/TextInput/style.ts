import styled, {CSSObject} from "@emotion/styled";

export const Input = styled.input<{customStyle?: CSSObject}>`
  width: 350px;
  height: 55px;
  background-color: white;
  border: 1px solid #bcbcbc;
  border-radius: 5px;
  padding: 0px 20px;
  box-sizing: border-box;
  font-size: 18px;
`;
