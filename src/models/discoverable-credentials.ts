import { s, type EnumSchema } from "../core/index.js";

export const DiscoverableCredentials = {
  Required: "required",
  Preferred: "preferred",
  Discouraged: "discouraged",
} as const;
export type DiscoverableCredentials =
  | (typeof DiscoverableCredentials)[keyof typeof DiscoverableCredentials]
  | (string & {});

export const discoverableCredentialsSchema: EnumSchema<DiscoverableCredentials> =
  s.enumOf<DiscoverableCredentials>(DiscoverableCredentials);
