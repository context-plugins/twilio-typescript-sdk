import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amdStatusCallbackMethodSchema, type AmdStatusCallbackMethod } from "./amd-status-callback-method.js";
import {
  dependentOrderEnumVerificationTypeSchema,
  type DependentOrderEnumVerificationType,
} from "./dependent-order-enum-verification-type.js";

export type CreateHostedNumbersHostedNumberOrderRequest = {
  phoneNumber: string;
  smsCapability: boolean;
  accountSid?: string;
  friendlyName?: string;
  uniqueName?: string;
  ccEmails?: string[];
  smsUrl?: string;
  smsMethod?: AmdStatusCallbackMethod;
  smsFallbackUrl?: string;
  smsFallbackMethod?: AmdStatusCallbackMethod;
  statusCallbackUrl?: string;
  statusCallbackMethod?: AmdStatusCallbackMethod;
  smsApplicationSid?: string;
  addressSid?: string;
  email?: string;
  verificationType?: DependentOrderEnumVerificationType;
  verificationDocumentSid?: string;
};

export const createHostedNumbersHostedNumberOrderRequestSchema: Schema<CreateHostedNumbersHostedNumberOrderRequest> =
  s.object<CreateHostedNumbersHostedNumberOrderRequest>({
    phoneNumber: s.string(),
    smsCapability: s.boolean(),
    accountSid: s.optional(s.string()),
    friendlyName: s.optional(s.string()),
    uniqueName: s.optional(s.string()),
    ccEmails: s.optional(s.array(s.string())),
    smsUrl: s.optional(s.string()),
    smsMethod: s.optional(s.lazy(() => amdStatusCallbackMethodSchema)),
    smsFallbackUrl: s.optional(s.string()),
    smsFallbackMethod: s.optional(s.lazy(() => amdStatusCallbackMethodSchema)),
    statusCallbackUrl: s.optional(s.string()),
    statusCallbackMethod: s.optional(s.lazy(() => amdStatusCallbackMethodSchema)),
    smsApplicationSid: s.optional(s.string()),
    addressSid: s.optional(s.string()),
    email: s.optional(s.string()),
    verificationType: s.optional(s.lazy(() => dependentOrderEnumVerificationTypeSchema)),
    verificationDocumentSid: s.optional(s.string()),
  });
