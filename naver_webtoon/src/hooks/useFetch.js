import { useCallback, useState } from "react";

const useFetchData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);

    // 공통 URL 부분 추가
    const url = `${process.env.REACT_APP_API}${requestConfig.url}`;

    try {
      const response = await fetch(url, {
        method: requestConfig?.method ? requestConfig.method : "GET",
        headers: requestConfig?.headers ? requestConfig.headers : {},
        body: requestConfig?.body ? requestConfig.body : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useFetchData;
