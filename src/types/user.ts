export interface UserAuth {
  token: string;
  user: {
    id: number;
    username: string;
  }
}