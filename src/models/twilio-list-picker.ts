import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { listItemSchema, type ListItem } from "./list-item.js";

/**
 * twilio/list-picker includes a menu of up to 10 options, which offers a simple way for users to
 * make a selection.
 */
export type TwilioListPicker = {
  body: string;
  button: string;
  items: ListItem[];
};

export const twilioListPickerSchema: Schema<TwilioListPicker> = s.object<TwilioListPicker>({
  body: s.string(),
  button: s.string(),
  items: s.array(s.lazy(() => listItemSchema)),
});
