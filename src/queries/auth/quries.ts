import AuthRepositoryImpl from "@/repositories/auth/AuthRepositoryImpl";
import {useMutation} from "@tanstack/react-query";

export const usePostLoginMutation = () => {
  const mutation = useMutation(AuthRepositoryImpl.postLogin);

  return mutation;
};
