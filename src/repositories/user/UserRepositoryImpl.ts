import apiClient from "@/libs/axios";
import {GetMyUserResponse, UserRepository} from "./UserRepository";

class UserRepositoryImpl implements UserRepository {
  public async getMyUser(): Promise<GetMyUserResponse> {
    const {data} = await apiClient.get("/user/my");
    return data;
  }
}

export default new UserRepositoryImpl();
