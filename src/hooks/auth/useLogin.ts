import {ACCESS_TOKEN_KEY} from "@/constants/token/token.constant";
import Token from "@/libs/token/Token";
import {usePostLoginMutation} from "@/queries/auth/quries";
import {useRouter} from "next/router";
import {FormEvent, useRef} from "react";

const useLogin = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const postLoginMutation = usePostLoginMutation();

  const onLogin = (e: FormEvent) => {
    e.preventDefault();

    if (emailRef.current && passwordRef.current) {
      console.log(emailRef.current.value);
      console.log(passwordRef.current.value);

      postLoginMutation.mutate(
        {
          email: emailRef.current.value,
          password: emailRef.current.value,
        },
        {
          onSuccess: (data) => {
            Token.setToken(ACCESS_TOKEN_KEY, data.accessToken);
            router.push("/");
          },
        }
      );
    }
  };

  return {emailRef, passwordRef, onLogin};
};

export default useLogin;
