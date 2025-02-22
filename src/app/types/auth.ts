export interface TToken {
  access_token: string;
  refresh_token: string;
}

export interface IAuthPost {
  username: string;
  password: string;
}

export interface IAuthResponse {
  access_token: string;
  refresh_token: string;
}
