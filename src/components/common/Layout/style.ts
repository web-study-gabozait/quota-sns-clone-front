import {LAYOUT_WIDTH} from "@/constants/layout/layout.constant";
import styled, {CSSObject} from "@emotion/styled";

export const Container = styled.main<{customStyle?: CSSObject}>`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e9eaed;

  ${({customStyle}) => customStyle};
`;

export const Wrap = styled.div`
  width: ${LAYOUT_WIDTH}px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px 0px;
`;
