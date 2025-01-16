import type { InternalAxiosRequestConfig } from 'axios';

export const RequestInterceptor = {
  async getInterceptor(config: InternalAxiosRequestConfig) {
    // TODO: handle error and refresh tokens

    return config;
  },
};
