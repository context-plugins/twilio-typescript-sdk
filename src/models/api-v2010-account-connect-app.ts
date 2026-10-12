import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  connectAppEnumPermissionSchema,
  type ConnectAppEnumPermission,
} from "./connect-app-enum-permission.js";
import {
  deauthorizeCallbackMethodSchema,
  type DeauthorizeCallbackMethod,
} from "./deauthorize-callback-method.js";

export type ApiV2010AccountConnectApp = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * ConnectApp resource.
   */
  accountSid?: string | null;
  /**
   * The URL we redirect the user to after we authenticate the user and obtain authorization to
   * access the Connect App.
   */
  authorizeRedirectUrl?: string | null;
  /** The company name set for the Connect App. */
  companyName?: string | null;
  /** The HTTP method we use to call `deauthorize_callback_url`. */
  deauthorizeCallbackMethod?: DeauthorizeCallbackMethod | null;
  /** The URL we call using the `deauthorize_callback_method` to de-authorize the Connect App. */
  deauthorizeCallbackUrl?: string | null;
  /** The description of the Connect App. */
  description?: string | null;
  /** The string that you assigned to describe the resource. */
  friendlyName?: string | null;
  /** The public URL where users can obtain more information about this Connect App. */
  homepageUrl?: string | null;
  /** The set of permissions that your ConnectApp requests. */
  permissions?: ConnectAppEnumPermission[] | null;
  /** The unique string that that we created to identify the ConnectApp resource. */
  sid?: string | null;
  /** The URI of the resource, relative to `https://api.twilio.com`. */
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
