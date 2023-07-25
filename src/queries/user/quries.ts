import {UseQueryOptions, useQuery} from "@tanstack/react-query";
import {QUERY_KEY} from "../queryKey";
import UserRepositoryImpl from "@/repositories/user/UserRepositoryImpl";
import {GetMyUserResponse} from "@/repositories/user/UserRepository";
import {AxiosError} from "axios";
import {CONFIG} from "@/config";

export const useGetMyUserQuery = (
  options?: UseQueryOptions<
    GetMyUserResponse,
    AxiosError,
    GetMyUserResponse,
    [string]
  >
) =>
  useQuery(
    [QUERY_KEY.user.getMyUser],
    () => {
      if (CONFIG.ENV === "development") {
        return {
          name: "test",
          email: "test@gmail.com",
          profile_image_url: null,
          login_count: 1,
          last_login_at: "2023-07-24",
          create_at: "2023-07-23",
        };
      }

      return UserRepositoryImpl.getMyUser();
    },
    {
      ...options,
    }
  );
