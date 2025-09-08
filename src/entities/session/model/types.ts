export interface AuthData {
  userId: string;
  name: string;
  email: string;
}

export enum LoginField {
  Email = 'email',
  Password = 'password',
}

export interface LoginData {
  [LoginField.Email]: string;
  [LoginField.Password]: string;
}

export interface LoginResponseData {
  userId: number;
  token: string;
}
