import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { listItemSchema, type ListItem } from "./list-item.js";

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
