import {LayoutProps} from "./types";
import Nav from "../Nav";
import * as S from "./style";

const Layout = ({children, customStyle}: LayoutProps) => {
  return (
    <S.Container customStyle={customStyle}>
      <Nav />
      <S.Wrap>{children}</S.Wrap>
    </S.Container>
  );
};

export default Layout;
