import styled, {CSSObject} from "@emotion/styled";

export const Container = styled.main<{customStyle?: CSSObject}>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  ${({customStyle}) => customStyle};
`;
