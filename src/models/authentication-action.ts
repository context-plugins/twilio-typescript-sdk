import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AuthenticationAction = {
  type: "COPY_CODE";
  copyCodeText: string;
};

export const authenticationActionSchema: Schema<AuthenticationAction> = s.object<AuthenticationAction>({
  type: s.literal("COPY_CODE"),
  copyCodeText: s.string(),
  _keysMap: {
    copyCodeText: "copy_code_text",
  },
});
