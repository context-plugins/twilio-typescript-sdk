import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { signUpOptionSchema, type SignUpOption } from "./sign-up-option.js";

/** User sign-up configuration for the application. */
export type UserSignUp = {
  signUpOptions?: SignUpOption[];
  doubleOptInProcess?: boolean;
  doubleOptInMessage?: string;
  signUpConfirmationMessage?: string;
  doubleOptInResponseMessage?: string;
  onlineWebFormMessage?: string;
  keywordMessage?: string;
  ivrMessage?: string;
  otherFormMessage?: string;
};

export const userSignUpSchema: Schema<UserSignUp> = s.object<UserSignUp>({
  signUpOptions: s.optional(s.array(s.lazy(() => signUpOptionSchema))),
  doubleOptInProcess: s.optional(s.boolean()),
  doubleOptInMessage: s.optional(s.string()),
  signUpConfirmationMessage: s.optional(s.string()),
  doubleOptInResponseMessage: s.optional(s.string()),
  onlineWebFormMessage: s.optional(s.string()),
  keywordMessage: s.optional(s.string()),
  ivrMessage: s.optional(s.string()),
  otherFormMessage: s.optional(s.string()),
  _keysMap: {
    signUpOptions: "sign_up_options",
    doubleOptInProcess: "double_opt_in_process",
    doubleOptInMessage: "double_opt_in_message",
    signUpConfirmationMessage: "sign_up_confirmation_message",
    doubleOptInResponseMessage: "double_opt_in_response_message",
    onlineWebFormMessage: "online_web_form_message",
    keywordMessage: "keyword_message",
    ivrMessage: "ivr_message",
    otherFormMessage: "other_form_message",
  },
});
