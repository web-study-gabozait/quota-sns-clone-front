import {UseQueryOptions, useQuery} from "@tanstack/react-query";
import {QUERY_KEY} from "../queryKey";
import UserRepositoryImpl from "@/repositories/user/UserRepositoryImpl";
import {GetMyUserResponse} from "@/repositories/user/UserRepository";
import {AxiosError} from "axios";

export const useGetMyUserQuery = (
  options?: UseQueryOptions<
    GetMyUserResponse,
    AxiosError,
    GetMyUserResponse,
    [string]
  >
) =>
  useQuery([QUERY_KEY.user.getMyUser], () => UserRepositoryImpl.getMyUser(), {
    ...options,
  });
