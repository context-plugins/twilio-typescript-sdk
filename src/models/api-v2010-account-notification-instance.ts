import { s, type Schema } from "../core/index.js";
import { requestMethodSchema, type RequestMethod } from "./request-method.js";

export type ApiV2010AccountNotificationInstance = {
  accountSid?: string | null;
  apiVersion?: string | null;
  callSid?: string | null;
  dateCreated?: string | null;
  dateUpdated?: string | null;
  errorCode?: string | null;
  log?: string | null;
  messageDate?: string | null;
  messageText?: string | null;
  moreInfo?: string | null;
  requestMethod?: RequestMethod | null;
  requestUrl?: string | null;
  requestVariables?: string | null;
  responseBody?: string | null;
  responseHeaders?: string | null;
  sid?: string | null;
  uri?: string | null;
};

export const apiV2010AccountNotificationInstanceSchema: Schema<ApiV2010AccountNotificationInstance> =
  s.object<ApiV2010AccountNotificationInstance>({
    accountSid: s.optionalNullable(s.string()),
    apiVersion: s.optionalNullable(s.string()),
    callSid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.string()),
    dateUpdated: s.optionalNullable(s.string()),
    errorCode: s.optionalNullable(s.string()),
    log: s.optionalNullable(s.string()),
    messageDate: s.optionalNullable(s.string()),
    messageText: s.optionalNullable(s.string()),
    moreInfo: s.optionalNullable(s.string()),
    requestMethod: s.optionalNullable(s.lazy(() => requestMethodSchema)),
    requestUrl: s.optionalNullable(s.string()),
    requestVariables: s.optionalNullable(s.string()),
    responseBody: s.optionalNullable(s.string()),
    responseHeaders: s.optionalNullable(s.string()),
    sid: s.optionalNullable(s.string()),
    uri: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      apiVersion: "api_version",
      callSid: "call_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      errorCode: "error_code",
      messageDate: "message_date",
      messageText: "message_text",
      moreInfo: "more_info",
      requestMethod: "request_method",
      requestUrl: "request_url",
      requestVariables: "request_variables",
      responseBody: "response_body",
      responseHeaders: "response_headers",
    },
  });
