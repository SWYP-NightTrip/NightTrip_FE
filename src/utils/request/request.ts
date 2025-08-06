import {
  HTTP401Error,
  HTTP500Error,
  HTTPEtcError,
  UnExpectedAPIError,
} from '@/utils/request/error';

interface ReqParams {
  url: string;
  params?: URLSearchParams;
  options?: RequestInit;
}

export const requestAPI = <T>({ url, params, options }: ReqParams): Promise<T> => {
  const fullUrl = params ? `${url}?${params.toString()}` : `${url}`;
  return new Promise((resolve, reject) => {
    fetch(fullUrl, options)
      .then(response => {
        if (!response.ok) {
          switch (response.status) {
            case 401:
              reject(new HTTP401Error());
              return;
            case 500:
              reject(new HTTP500Error());
              return;
            default:
              reject(new HTTPEtcError(response.status));
              return;
          }
        }

        return response.json();
      })
      .then((data: T) => resolve(data))
      .catch((error: unknown) => {
        reject(new UnExpectedAPIError({ error }));
      });
  });
};
