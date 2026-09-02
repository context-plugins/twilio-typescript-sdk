import { s, type Schema } from "../core/index.js";
import { authorSchema, type Author } from "./author.js";
import { recipient2Schema, type Recipient2 } from "./recipient2.js";
import { content2Schema, type Content2 } from "./unions/content2.js";

export type V2ConversationsCommunicationsRequest = {
  author: Author;
  content: Content2;
  channelId?: string;
  recipients: Recipient2[];
};

export const v2ConversationsCommunicationsRequestSchema: Schema<V2ConversationsCommunicationsRequest> =
  s.object<V2ConversationsCommunicationsRequest>({
    author: authorSchema,
    content: content2Schema,
    channelId: s.optional(s.string()),
    recipients: s.array(s.lazy(() => recipient2Schema)),
  });
