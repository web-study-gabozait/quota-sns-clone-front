import {palette} from "@/styles/palette";
import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const Wrap = styled.form`
  width: 350px;
  height: min-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0px;
`;

export const Title = styled.h2`
  font-size: 28px;
  color: black;
  margin-bottom: 15px;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
`;

export const Guide = styled.p`
  display: flex;
  font-size: 15px;
  margin-top: 15px;

  a {
    cursor: pointer;
    color: ${palette.main};
    margin-left: 4px;
  }
`;
