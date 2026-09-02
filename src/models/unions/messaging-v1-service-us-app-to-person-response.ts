import { s, type Schema } from "../../core/index.js";
import {
  messagingV1ServiceUsAppToPersonV2Schema,
  type MessagingV1ServiceUsAppToPersonV2,
} from "../messaging-v1-service-us-app-to-person-v2.js";
import {
  messagingV1ServiceUsAppToPersonSchema,
  type MessagingV1ServiceUsAppToPerson,
} from "../messaging-v1-service-us-app-to-person.js";

export type MessagingV1ServiceUsAppToPersonResponse =
  | MessagingV1ServiceUsAppToPerson
  | MessagingV1ServiceUsAppToPersonV2;

export const messagingV1ServiceUsAppToPersonResponseSchema: Schema<MessagingV1ServiceUsAppToPersonResponse> =
  s.of<MessagingV1ServiceUsAppToPersonResponse>(
    s.union([
      s.lazy(() => messagingV1ServiceUsAppToPersonSchema),
      s.lazy(() => messagingV1ServiceUsAppToPersonV2Schema),
    ]),
  );
