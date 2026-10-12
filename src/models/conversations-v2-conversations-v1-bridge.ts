import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Configuration for Conversations V1 bridge. When set, messaging channels route through
 * Conversations V1. Use this to integrate with existing Conversations V1 applications.
 */
export type ConversationsV2ConversationsV1Bridge = {
  /** The Conversations V1 Service SID (IS prefix). One configuration per V1 Service SID. */
  serviceId: string;
};

export const conversationsV2ConversationsV1BridgeSchema: Schema<ConversationsV2ConversationsV1Bridge> =
  s.object<ConversationsV2ConversationsV1Bridge>({
    serviceId: s.string(),
  });
