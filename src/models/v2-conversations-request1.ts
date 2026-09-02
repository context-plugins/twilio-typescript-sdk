import { s, type Schema } from "../core/index.js";
import { status7Schema, type Status7 } from "./status7.js";

export type V2ConversationsRequest1 = {
  name?: string;
  status: Status7;
};

export const v2ConversationsRequest1Schema: Schema<V2ConversationsRequest1> =
  s.object<V2ConversationsRequest1>({
    name: s.optional(s.string()),
    status: status7Schema,
  });
