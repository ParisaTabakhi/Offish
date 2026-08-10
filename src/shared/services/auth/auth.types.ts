export interface ILoginRequest {
  email: string;
  password: string;
  fcmToken?: string;
}

export interface IRegisterRequest {
  email: string;
  password: string;
  mobileNumber: string;
  fullName: string;
  role: 0 | 1 | 2 | 3;
  fcmToken?: string;
}

export interface IAuthResponse {
  accessToken: string;
  expiresIn: number;
  tokenType: string;
  expiration: string;
  user: {
    id: string;
    email: string;
    hashPassword?: string;
    mobileNumber: string;
    role: number;
  };
}

export interface IAuthService {
  login(credentials: ILoginRequest): Promise<IAuthResponse>;
  register(data: IRegisterRequest): Promise<IAuthResponse>;
  logout(): Promise<void>;
  getCurrentUser(): Promise<IAuthResponse['user'] | null>;
  refreshToken(): Promise<string | null>;
}