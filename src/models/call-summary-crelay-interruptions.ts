import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CallSummaryCrelayInterruptions = {
  customerToAgent?: number;
  agentToCustomer?: number;
};

export const callSummaryCrelayInterruptionsSchema: Schema<CallSummaryCrelayInterruptions> =
  s.object<CallSummaryCrelayInterruptions>({
    customerToAgent: s.optional(s.number()),
    agentToCustomer: s.optional(s.number()),
    _keysMap: {
      customerToAgent: "customer_to_agent",
      agentToCustomer: "agent_to_customer",
    },
  });
