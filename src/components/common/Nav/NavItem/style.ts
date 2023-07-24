import styled, {CSSObject} from "@emotion/styled";

export const Container = styled.div<{customStyle?: CSSObject}>`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: white;
  background: none;
  border: 0px;
  cursor: pointer;
  padding: 0px;
`;
