import {NavItemProps} from "./types";
import * as S from "./style";

const NavItem = ({onClick, children, customStyle}: NavItemProps) => {
  return (
    <S.Container onClick={() => onClick?.()} customStyle={customStyle}>
      {children}
    </S.Container>
  );
};

export default NavItem;
