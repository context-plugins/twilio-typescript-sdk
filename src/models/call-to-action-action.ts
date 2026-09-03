import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { callToActionActionTypeSchema, type CallToActionActionType } from "./call-to-action-action-type.js";

export type CallToActionAction = {
  type: CallToActionActionType;
  title: string;
  url?: string;
  phone?: string;
  code?: string;
  id?: string;
};

export const callToActionActionSchema: Schema<CallToActionAction> = s.object<CallToActionAction>({
  type: callToActionActionTypeSchema,
  title: s.string(),
  url: s.optional(s.string()),
  phone: s.optional(s.string()),
  code: s.optional(s.string()),
  id: s.optional(s.string()),
});
