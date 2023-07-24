import {useRouter} from "next/router";
import {LayoutProps} from "./types";
import Nav from "../Nav";
import * as S from "./style";

const Layout = ({children, customStyle}: LayoutProps) => {
  const router = useRouter();

  const isShowGNBPage = !(
    router.pathname === "/login" || router.pathname === "/join"
  );

  return (
    <S.Container customStyle={customStyle}>
      {isShowGNBPage && <Nav />}
      {children}
    </S.Container>
  );
};

export default Layout;
