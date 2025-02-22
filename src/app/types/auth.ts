export interface IToken {
  access_token: string | null;
  refresh_token: string | null;
}

// export type TAuth 
export interface IAuthPost {
  username: string;
  password: string;
}

export type TTokenType = "bearer"; 
export interface IAuthResponse {
  access_token: string;
  refresh_token: string;
  token_type?: TTokenType;
}
