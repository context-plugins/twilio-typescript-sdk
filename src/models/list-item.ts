import { s, type Schema } from "../core/index.js";

export type ListItem = {
  id: string;
  item: string;
  description?: string;
};

export const listItemSchema: Schema<ListItem> = s.object<ListItem>({
  id: s.string(),
  item: s.string(),
  description: s.optional(s.string()),
});
