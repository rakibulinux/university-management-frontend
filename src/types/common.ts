import { IGenericErrorMessage } from "./error";

export interface IMeta {
  limit: number;
  page: number;
  skip: number;
}

export type ResponseSuccessType = {
  data: any;
  meta: IMeta;
};
export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessage: IGenericErrorMessage[];
};

export type UserInfoType = {
  userId: string;
  role: string;
  iat: number;
  exp: number;
};
