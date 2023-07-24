import {useRouter} from "next/router";
import NavItem from "./NavItem";
import * as S from "./style";
import {HiPlus} from "@react-icons/all-files/hi/HiPlus";
import {BsPeopleFill} from "@react-icons/all-files/bs/BsPeopleFill";
import useTokenCheck from "@/hooks/auth/useTokenCheck";

const Nav = () => {
  const router = useRouter();

  const {isAuthorized} = useTokenCheck();

  return (
    <S.Container>
      <S.Wrap>
        <S.Logo onClick={() => router.push("/")}>Quota SNS</S.Logo>
        {isAuthorized ? (
          <>
            <S.InnerWrap>
              <NavItem onClick={() => console.log("공유하기 클릭")}>
                <S.WriteIcon>
                  <HiPlus />
                </S.WriteIcon>
                공유하기
              </NavItem>
              <NavItem onClick={() => router.push("/friend")}>
                <S.WriteIcon>
                  <BsPeopleFill />
                </S.WriteIcon>
                친구
              </NavItem>
            </S.InnerWrap>
            <S.InnerWrap></S.InnerWrap>
          </>
        ) : (
          <>asdad</>
        )}
      </S.Wrap>
    </S.Container>
  );
};

export default Nav;
