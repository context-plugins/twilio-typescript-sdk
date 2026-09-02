import { s, type Schema } from "../core/index.js";
import {
  connectAppEnumPermissionSchema,
  type ConnectAppEnumPermission,
} from "./connect-app-enum-permission.js";
import {
  deauthorizeCallbackMethodSchema,
  type DeauthorizeCallbackMethod,
} from "./deauthorize-callback-method.js";

export type ApiV2010AccountConnectApp = {
  accountSid?: string | null;
  authorizeRedirectUrl?: string | null;
  companyName?: string | null;
  deauthorizeCallbackMethod?: DeauthorizeCallbackMethod | null;
  deauthorizeCallbackUrl?: string | null;
  description?: string | null;
  friendlyName?: string | null;
  homepageUrl?: string | null;
  permissions?: ConnectAppEnumPermission[] | null;
  sid?: string | null;
  uri?: string | null;
};

export const apiV2010AccountConnectAppSchema: Schema<ApiV2010AccountConnectApp> =
  s.object<ApiV2010AccountConnectApp>({
    accountSid: s.optionalNullable(s.string()),
    authorizeRedirectUrl: s.optionalNullable(s.string()),
    companyName: s.optionalNullable(s.string()),
    deauthorizeCallbackMethod: s.optionalNullable(s.lazy(() => deauthorizeCallbackMethodSchema)),
    deauthorizeCallbackUrl: s.optionalNullable(s.string()),
    description: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    homepageUrl: s.optionalNullable(s.string()),
    permissions: s.optionalNullable(s.array(s.lazy(() => connectAppEnumPermissionSchema))),
    sid: s.optionalNullable(s.string()),
    uri: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      authorizeRedirectUrl: "authorize_redirect_url",
      companyName: "company_name",
      deauthorizeCallbackMethod: "deauthorize_callback_method",
      deauthorizeCallbackUrl: "deauthorize_callback_url",
      friendlyName: "friendly_name",
      homepageUrl: "homepage_url",
    },
  });
