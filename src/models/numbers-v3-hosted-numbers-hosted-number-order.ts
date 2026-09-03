import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { capabilities2Schema, type Capabilities2 } from "./capabilities2.js";
import {
  dependentOrderEnumStatusSchema,
  type DependentOrderEnumStatus,
} from "./dependent-order-enum-status.js";
import {
  dependentOrderEnumVerificationTypeSchema,
  type DependentOrderEnumVerificationType,
} from "./dependent-order-enum-verification-type.js";

export type NumbersV3HostedNumbersHostedNumberOrder = {
  sid?: string | null;
  accountSid?: string | null;
  incomingPhoneNumberSid?: string | null;
  addressSid?: string | null;
  signingDocumentSid?: string | null;
  phoneNumber?: string | null;
  capabilities?: Capabilities2 | null;
  friendlyName?: string | null;
  uniqueName?: string | null;
  status?: DependentOrderEnumStatus;
  failureReason?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  verificationAttempts?: number;
  email?: string | null;
  ccEmails?: string[] | null;
  url?: string | null;
  verificationType?: DependentOrderEnumVerificationType;
  verificationDocumentSid?: string | null;
  extension?: string | null;
  callDelay?: number;
  verificationCode?: string | null;
  verificationCallSids?: string[] | null;
};

export const numbersV3HostedNumbersHostedNumberOrderSchema: Schema<NumbersV3HostedNumbersHostedNumberOrder> =
  s.object<NumbersV3HostedNumbersHostedNumberOrder>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    incomingPhoneNumberSid: s.optionalNullable(s.string()),
    addressSid: s.optionalNullable(s.string()),
    signingDocumentSid: s.optionalNullable(s.string()),
    phoneNumber: s.optionalNullable(s.string()),
    capabilities: s.optionalNullable(s.lazy(() => capabilities2Schema)),
    friendlyName: s.optionalNullable(s.string()),
    uniqueName: s.optionalNullable(s.string()),
    status: s.optional(s.lazy(() => dependentOrderEnumStatusSchema)),
    failureReason: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    verificationAttempts: s.optional(s.number()),
    email: s.optionalNullable(s.string()),
    ccEmails: s.optionalNullable(s.array(s.string())),
    url: s.optionalNullable(s.string()),
    verificationType: s.optional(s.lazy(() => dependentOrderEnumVerificationTypeSchema)),
    verificationDocumentSid: s.optionalNullable(s.string()),
    extension: s.optionalNullable(s.string()),
    callDelay: s.optional(s.number()),
    verificationCode: s.optionalNullable(s.string()),
    verificationCallSids: s.optionalNullable(s.array(s.string())),
  });
