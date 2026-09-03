import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IceServer = {
  credential?: string;
  username?: string;
  url?: string;
  urls?: string;
};

export const iceServerSchema: Schema<IceServer> = s.object<IceServer>({
  credential: s.optional(s.string()),
  username: s.optional(s.string()),
  url: s.optional(s.string()),
  urls: s.optional(s.string()),
});
