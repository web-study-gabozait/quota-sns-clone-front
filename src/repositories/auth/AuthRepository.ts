import {User} from "@/models/user";

export interface AuthRepository {
  postLogin({email, password}: PostLoginParam): Promise<PostLoginResponse>;
}

export interface PostLoginParam {
  email: string;
  password: string;
}

export interface PostLoginResponse extends User {
  accessToken: string;
}
