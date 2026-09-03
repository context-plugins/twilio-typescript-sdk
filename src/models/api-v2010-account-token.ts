import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { iceServerSchema, type IceServer } from "./ice-server.js";

export type ApiV2010AccountToken = {
  accountSid?: string | null;
  dateCreated?: string | null;
  dateUpdated?: string | null;
  iceServers?: IceServer[] | null;
  password?: string | null;
  ttl?: string | null;
  username?: string | null;
};

export const apiV2010AccountTokenSchema: Schema<ApiV2010AccountToken> = s.object<ApiV2010AccountToken>({
  accountSid: s.optionalNullable(s.string()),
  dateCreated: s.optionalNullable(s.string()),
  dateUpdated: s.optionalNullable(s.string()),
  iceServers: s.optionalNullable(s.array(s.lazy(() => iceServerSchema))),
  password: s.optionalNullable(s.string()),
  ttl: s.optionalNullable(s.string()),
  username: s.optionalNullable(s.string()),
  _keysMap: {
    accountSid: "account_sid",
    dateCreated: "date_created",
    dateUpdated: "date_updated",
    iceServers: "ice_servers",
  },
});
