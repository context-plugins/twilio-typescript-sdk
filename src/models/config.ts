import { s, type Schema } from "../core/index.js";
import {
  authenticatorAttachment1Schema,
  type AuthenticatorAttachment1,
} from "./authenticator-attachment1.js";
import { discoverableCredentialsSchema, type DiscoverableCredentials } from "./discoverable-credentials.js";
import { relyingPartySchema, type RelyingParty } from "./relying-party.js";
import { userVerificationSchema, type UserVerification } from "./user-verification.js";

export type Config = {
  relyingParty?: RelyingParty;
  authenticatorAttachment?: AuthenticatorAttachment1;
  discoverableCredentials?: DiscoverableCredentials;
  userVerification?: UserVerification;
};

export const configSchema: Schema<Config> = s.object<Config>({
  relyingParty: s.optional(s.lazy(() => relyingPartySchema)),
  authenticatorAttachment: s.optional(s.lazy(() => authenticatorAttachment1Schema)),
  discoverableCredentials: s.optional(s.lazy(() => discoverableCredentialsSchema)),
  userVerification: s.optional(s.lazy(() => userVerificationSchema)),
  _keysMap: {
    relyingParty: "relying_party",
    authenticatorAttachment: "authenticator_attachment",
    discoverableCredentials: "discoverable_credentials",
    userVerification: "user_verification",
  },
});
