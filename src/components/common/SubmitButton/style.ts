import {palette} from "@/styles/palette";
import styled, {CSSObject} from "@emotion/styled";

export const Button = styled.button<{customStyle?: CSSObject}>`
  width: 175px;
  height: 45px;
  background-color: ${palette.main};
  border-radius: 5px;
  font-size: 18px;
  color: white;
  border: 0px;
  cursor: pointer;

  ${({customStyle}) => customStyle};
`;
