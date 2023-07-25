import useLogin from "@/hooks/auth/useLogin";
import SubmitButton from "../common/SubmitButton";
import TextInput from "../common/TextInput";
import * as S from "./style";

const Login = () => {
  const {emailRef, passwordRef, onLogin} = useLogin();

  return (
    <S.Container>
      <S.Wrap onSubmit={onLogin}>
        <S.Title>웹 트랙 로그인</S.Title>
        <S.InputWrap>
          <TextInput placeholder="Email" ref={emailRef} />
          <TextInput placeholder="Password" type="password" ref={passwordRef} />
        </S.InputWrap>
        <SubmitButton
          customStyle={{width: "100%", marginTop: 15}}
          type="submit"
        >
          로그인
        </SubmitButton>
        <S.Guide>
          계정이 필요하신가요?
          <a>회원가입</a>
        </S.Guide>
      </S.Wrap>
    </S.Container>
  );
};

export default Login;
