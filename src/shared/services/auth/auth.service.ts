import { publicApiClient } from '../../../shared/api/client';
import { ENDPOINTS } from '../../../shared/api/endpoints';
import {
  ILoginRequest,
  IRegisterRequest,
  IAuthResponse,
} from './auth.types';

export const authService = {
  /**
   * login 
   */
  login: async (credentials: ILoginRequest): Promise<IAuthResponse> => {
    const response = await publicApiClient.post<IAuthResponse>(
      ENDPOINTS.AUTH.LOGIN,
      credentials
    );
    return response.data;
  },

  /**
   *sing up 
   */
  register: async (data: IRegisterRequest): Promise<IAuthResponse> => {
    const response = await publicApiClient.post<IAuthResponse>(
      ENDPOINTS.AUTH.REGISTER,
      data
    );
    return response.data;
  },

  /**
   * logout
   */
  logout: async (): Promise<void> => {
    try {
      await publicApiClient.post(ENDPOINTS.AUTH.LOGOUT);
    } catch {
      //ignore error
    }
  },
};