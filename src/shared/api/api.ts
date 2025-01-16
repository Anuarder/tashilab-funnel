import { AxiosStatic } from 'axios';

import { RequestInterceptor } from './interceptors/request-interceptor';
import { ResponseInterceptor } from './interceptors/response-interceptor';
import { ApiClientConfig } from './types';

const headers = {
  'accept-language': 'en',
};

export function createApiClient(axios: AxiosStatic, config: ApiClientConfig) {
  const http = axios.create({
    baseURL: config.baseURL,
    headers: {
      ...headers,
    },
  });

  http.interceptors.request.use(RequestInterceptor.getInterceptor);

  http.interceptors.response.use(
    ResponseInterceptor.getOkInterceptor,
    ResponseInterceptor.getErrorInterceptor
  );

  return {
    http,
  };
}
