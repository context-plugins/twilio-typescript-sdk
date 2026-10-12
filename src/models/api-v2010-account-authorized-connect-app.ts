import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authorizedConnectAppEnumPermissionSchema,
  type AuthorizedConnectAppEnumPermission,
} from "./authorized-connect-app-enum-permission.js";

export type ApiV2010AccountAuthorizedConnectApp = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * AuthorizedConnectApp resource.
   */
  accountSid?: string | null;
  /** The company name set for the Connect App. */
  connectAppCompanyName?: string | null;
  /** A detailed description of the Connect App. */
  connectAppDescription?: string | null;
  /** The name of the Connect App. */
  connectAppFriendlyName?: string | null;
  /** The public URL for the Connect App. */
  connectAppHomepageUrl?: string | null;
  /** The SID that we assigned to the Connect App. */
  connectAppSid?: string | null;
  /**
   * The set of permissions that you authorized for the Connect App. Can be: `get-all` or
   * `post-all`.
   */
  permissions?: AuthorizedConnectAppEnumPermission[] | null;
  /** The URI of the resource, relative to `https://api.twilio.com`. */
  uri?: string | null;
};

export const apiV2010AccountAuthorizedConnectAppSchema: Schema<ApiV2010AccountAuthorizedConnectApp> =
  s.object<ApiV2010AccountAuthorizedConnectApp>({
    accountSid: s.optionalNullable(s.string()),
    connectAppCompanyName: s.optionalNullable(s.string()),
    connectAppDescription: s.optionalNullable(s.string()),
    connectAppFriendlyName: s.optionalNullable(s.string()),
    connectAppHomepageUrl: s.optionalNullable(s.string()),
    connectAppSid: s.optionalNullable(s.string()),
    permissions: s.optionalNullable(s.array(s.lazy(() => authorizedConnectAppEnumPermissionSchema))),
    uri: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      connectAppCompanyName: "connect_app_company_name",
      connectAppDescription: "connect_app_description",
      connectAppFriendlyName: "connect_app_friendly_name",
      connectAppHomepageUrl: "connect_app_homepage_url",
      connectAppSid: "connect_app_sid",
    },
  });
