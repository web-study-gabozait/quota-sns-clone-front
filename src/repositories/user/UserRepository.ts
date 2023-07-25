import {User} from "@/models/user";

export interface UserRepository {
  getMyUser(): Promise<GetMyUserResponse>;
}

export interface GetMyUserResponse extends User {}
