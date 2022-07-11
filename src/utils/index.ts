import { useEffect, useState } from "react";

export interface AsyncResult<T> {
  data?: T;
  error?: string;
  loading: boolean;
}

export function useAsyncCall<T = any>(
  func: (a1?: any, a2?: any, a3?: any) => Promise<T>,
  arg1?: any,
  arg2?: any,
  arg3?: any
) {
  const [result, setResult] = useState<AsyncResult<T>>({
    loading: true,
  });

  useEffect(() => {
    setResult({ loading: true });

    func(arg1, arg2, arg3)
      .then((res: T) => {
        setResult({
          data: res,
          loading: false,
        });
      })
      .catch((err: any) => {
        console.log("FAILED CALL", err);
        setResult({
          loading: false,
          error: String(err),
        });
      });
  }, [func, arg1, arg2, arg3]);

  return result;
}
