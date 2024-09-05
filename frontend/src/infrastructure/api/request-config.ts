export type RequestConfig = {
  method: string;
  headers?: Record<string, string>;
  body?: string;
};

export const requestConfig = <T>(
  method: string,
  data?: T,
  token: string | null = null,
): RequestConfig => {
  let config: RequestConfig;

  if (method === 'DELETE' || data === null) {
    config = {
      method,
      headers: {},
    };
  } else {
    config = {
      method,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }

  if (token) {
    if (!config.headers) {
      config.headers = {};
    }
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};
