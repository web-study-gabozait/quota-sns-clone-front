import {LAYOUT_WIDTH} from "@/constants/layout/layout.constant";
import {palette} from "@/styles/palette";
import styled from "@emotion/styled";

export const Container = styled.nav`
  width: 100%;
  min-height: 60px;
  background-color: ${palette.main};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrap = styled.div`
  width: ${LAYOUT_WIDTH}px;
  display: flex;
  align-items: center;
`;

export const ItemsWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InnerWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const Logo = styled.h1`
  font-size: 20px;
  color: white;
  font-weight: bold;
  margin-right: 20px;
  white-space: nowrap;
  cursor: pointer;
`;

export const WriteIcon = styled.div`
  width: 18px;
  height: 18px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FriendIcon = styled.div`
  width: 18px;
  height: 18px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
