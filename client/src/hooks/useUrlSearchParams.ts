import { useSearchParams } from "react-router";

export function useUrlSearchParams(): [
  URLSearchParams, 
  (params: URLSearchParams, key: string, value: string) => void, 
  (params: URLSearchParams, key: string) => void
] {
  const [searchParams, setSearchParams] = useSearchParams()

  const setUrlSearchParams = (params: URLSearchParams, key: string, value: string): void => {
    if(params.has(key)) {
      params.set(key, value);
    } else {
      params.append(key, value);
    }

    setSearchParams(params)
  }

  const removeUrlSearchParam = (params: URLSearchParams, key: string): void => {
    if(params.has(key)) {
      params.delete(key);
    }

    setSearchParams(params);
  }

  return [searchParams, setUrlSearchParams, removeUrlSearchParam];
}