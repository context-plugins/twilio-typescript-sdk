import { s, type Schema } from "../core/index.js";
import {
  authorizedConnectAppEnumPermissionSchema,
  type AuthorizedConnectAppEnumPermission,
} from "./authorized-connect-app-enum-permission.js";

export type ApiV2010AccountAuthorizedConnectApp = {
  accountSid?: string | null;
  connectAppCompanyName?: string | null;
  connectAppDescription?: string | null;
  connectAppFriendlyName?: string | null;
  connectAppHomepageUrl?: string | null;
  connectAppSid?: string | null;
  permissions?: AuthorizedConnectAppEnumPermission[] | null;
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
