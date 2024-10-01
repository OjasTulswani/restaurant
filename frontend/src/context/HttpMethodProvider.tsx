import AxiosService from "../axiosService/baseUrl/AxiosService";
import { createContext, useState, useCallback, useContext } from "react";
import { ApiResponseData } from "../types/api";

interface HttpMethodContextType {
  showApiLoader: boolean;
  setApiLoader: React.Dispatch<React.SetStateAction<boolean>>;
  get: (endpoint: string, showLoader?: boolean) => Promise<ApiResponseData>;

  post: (
    endpoint: string,
    data: object | Array<object>,
    showLoader?: boolean
  ) => Promise<ApiResponseData>;

  delete: (
    endpoint: string,
    body: object | Array<object>,
    showLoader?: boolean
  ) => Promise<ApiResponseData>;
}

export const HttpMethodContext = createContext<
  HttpMethodContextType | undefined
>(undefined);

const createApiErrorResponse = (error: unknown): ApiResponseData => {
  let errorMsg = "Something went wrong";

  if (error instanceof String) {
    errorMsg = error.toString();
  } else if (error instanceof Error) {
    errorMsg = error.message;
  }

  return { success: false, errorMsg, response: {} };
};

type ChildrenType = { children: React.ReactNode };

export const HttpMethodContextProvider = ({ children }: ChildrenType) => {
  const [showApiLoader, setShowApiLoader] = useState(false);

  AxiosService.defaults.headers.common.Accept = "application/json";
  AxiosService.defaults.headers.common["Content-Type"] = "application/json";

  const get = useCallback(
    async (endpoint: string, showLoader = true): Promise<ApiResponseData> => {
      setShowApiLoader(showLoader);

      return AxiosService.get(endpoint)
        .then((res) => {
          console.log(`GET: ${endpoint}:`, res.status);
          return {
            success: true,
            errorMsg: "",
            response: res.data,
          };
        })
        .catch((err) => {
          console.log(`GET: ${endpoint}:`, err?.response?.data ?? err);
          return createApiErrorResponse(err);
        })
        .finally(() => setShowApiLoader(false));
    },
    [setShowApiLoader]
  );

  const post = useCallback(
    async (
      endpoint: string,
      data: object | Array<object>,
      showLoader = true
    ): Promise<ApiResponseData> => {
      setShowApiLoader(showLoader);

      return AxiosService.post(endpoint, data)
        .then((res) => {
          console.log(`POST: ${endpoint}:`, res.status);
          return {
            success: true,
            errorMsg: "",
            response: res.data,
          };
        })
        .catch((err) => {
          console.log(`POST: ${endpoint}:`, err?.response?.data ?? err);
          return createApiErrorResponse(err);
        })
        .finally(() => setShowApiLoader(false));
    },
    [setShowApiLoader]
  );

  const deleteMethod = useCallback(
    async (
      endpoint: string,
      body: object | Array<object>,
      showLoader = true
    ): Promise<ApiResponseData> => {
      setShowApiLoader(showLoader);

      return AxiosService.delete(endpoint, { data: body })
        .then((res) => {
          console.log(`DELETE: ${endpoint}:`, res.status);
          return {
            success: true,
            errorMsg: "",
            response: res.data,
          };
        })
        .catch((err) => {
          console.log(`DELETE: ${endpoint}:`, err?.response?.data ?? err);
          return createApiErrorResponse(err);
        })
        .finally(() => setShowApiLoader(false));
    },
    [setShowApiLoader]
  );

  return (
    <HttpMethodContext.Provider
      value={{
        showApiLoader,
        setApiLoader: setShowApiLoader,
        get,
        post,
        delete: deleteMethod,
      }}
    >
      {children}
    </HttpMethodContext.Provider>
  );
};

export const useHttpMethodContext = () => {
  const context = useContext(HttpMethodContext);

  if (!context) {
    throw new Error("useHttpMethodContext must be used within a UserProvider");
  }

  return context;
};
