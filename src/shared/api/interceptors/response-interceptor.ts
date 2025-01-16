import type { AxiosError, AxiosResponse } from 'axios';

export const ResponseInterceptor = {
  getOkInterceptor(response: AxiosResponse<unknown, unknown>) {
    // TODO: handle token updates, if needed
    return response;
  },
  getErrorInterceptor(error: AxiosError) {
    // TODO: handle refresh token, if needed

    // const isUnauthorized = error.response?.status === 401;
    //
    // if (isUnauthorized) {
    //   return refreshTokenAndRetry;
    // }

    return Promise.reject(error);
  },
};
