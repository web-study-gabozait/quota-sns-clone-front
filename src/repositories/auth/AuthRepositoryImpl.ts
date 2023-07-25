import apiClient from "@/libs/axios";
import {
  AuthRepository,
  PostLoginParam,
  PostLoginResponse,
} from "./AuthRepository";

class AuthRepositoryImpl implements AuthRepository {
  public async postLogin(param: PostLoginParam): Promise<PostLoginResponse> {
    const {data} = await apiClient.post("/auth/login", param);
    return data;
  }
}

export default new AuthRepositoryImpl();
