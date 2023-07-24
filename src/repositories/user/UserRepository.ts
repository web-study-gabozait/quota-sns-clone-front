export interface UserRepository {
  getMyUser(): Promise<GetMyUserResponse>;
}

export interface GetMyUserResponse {}
