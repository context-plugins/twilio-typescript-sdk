import { s, type EnumSchema } from "../core/index.js";

export const SignUpOption = {
  OnlineWebForm: "ONLINE_WEB_FORM",
  Ivr: "IVR",
  Verbally: "VERBALLY",
  MobileAppOrDigitalKiosk: "MOBILE_APP_OR_DIGITAL_KIOSK",
  PaperForm: "PAPER_FORM",
  ShortcodeKeyword: "SHORTCODE_KEYWORD",
  OtherForm: "OTHER_FORM",
} as const;
export type SignUpOption = (typeof SignUpOption)[keyof typeof SignUpOption] | (string & {});

export const signUpOptionSchema: EnumSchema<SignUpOption> = s.enumOf<SignUpOption>(SignUpOption);
