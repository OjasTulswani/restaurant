export type ApiMeta = {
    method: string;
    url: string;
    statusCode: number;
};

export type ApiResponseData = {
    success: boolean;
    errorMsg: string;
    response: object | Array<object>;
    meta? : ApiMeta
  };

