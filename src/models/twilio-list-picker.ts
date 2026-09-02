import { s, type Schema } from "../core/index.js";
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
