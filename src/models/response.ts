import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transportSchema, type Transport } from "./transport.js";

export type Response = {
  attestationObject?: string;
  clientDataJson?: string;
  transports?: Transport[];
};

export const responseSchema: Schema<Response> = s.object<Response>({
  attestationObject: s.optional(s.string()),
  clientDataJson: s.optional(s.string()),
  transports: s.optional(s.array(s.lazy(() => transportSchema))),
  _keysMap: {
    clientDataJson: "clientDataJSON",
  },
});
