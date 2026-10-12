import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CallSummaryCrelayInterruptions = {
  /** @default 0 */
  customerToAgent?: number;
  /** @default 0 */
  agentToCustomer?: number;
};

export const callSummaryCrelayInterruptionsSchema: Schema<CallSummaryCrelayInterruptions> =
  s.object<CallSummaryCrelayInterruptions>({
    customerToAgent: s.defaulted(s.int(), 0),
    agentToCustomer: s.defaulted(s.int(), 0),
    _keysMap: {
      customerToAgent: "customer_to_agent",
      agentToCustomer: "agent_to_customer",
    },
  });
