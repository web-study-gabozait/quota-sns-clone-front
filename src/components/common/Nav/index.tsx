import {useRouter} from "next/router";
import NavItem from "./NavItem";
import * as S from "./style";
import {HiPlus} from "@react-icons/all-files/hi/HiPlus";
import {BsPeopleFill} from "@react-icons/all-files/bs/BsPeopleFill";
import useTokenCheck from "@/hooks/auth/useTokenCheck";
import {useGetMyUserQuery} from "@/queries/user/quries";
import useLogout from "@/hooks/auth/useLogout";

const Nav = () => {
  const router = useRouter();

  const {isAuthorized} = useTokenCheck();

  const {data: serverMyUserData} = useGetMyUserQuery();

  const {onLogout} = useLogout();

  return (
    <S.Container>
      <S.Wrap>
        <S.Logo onClick={() => router.push("/")}>Quota SNS</S.Logo>
        {isAuthorized ? (
          <S.ItemsWrap>
            <S.InnerWrap>
              <NavItem onClick={() => console.log("공유하기 클릭")}>
                <S.WriteIcon>
                  <HiPlus />
                </S.WriteIcon>
                <a>공유하기</a>
              </NavItem>
              <NavItem onClick={() => router.push("/friend")}>
                <S.WriteIcon>
                  <BsPeopleFill />
                </S.WriteIcon>
                <a>친구</a>
              </NavItem>
            </S.InnerWrap>
            <S.InnerWrap>
              <NavItem>{serverMyUserData?.email}</NavItem>
              <NavItem onClick={onLogout}>로그아웃</NavItem>
            </S.InnerWrap>
          </S.ItemsWrap>
        ) : (
          <S.ItemsWrap>
            <S.InnerWrap>
              <NavItem onClick={() => router.push("/login")}>로그인</NavItem>
              <NavItem onClick={() => router.push("/join")}>회원가입</NavItem>
            </S.InnerWrap>
          </S.ItemsWrap>
        )}
      </S.Wrap>
    </S.Container>
  );
};

export default Nav;
