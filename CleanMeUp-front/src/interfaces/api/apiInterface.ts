export interface ApiRequest {
  dispatch(action: any);
  startActionType();
  successActionType(action: any);
  errorActionType(action: any);
  url: string;
  data?: object;
}
