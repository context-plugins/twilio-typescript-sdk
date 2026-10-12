import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { senderIdPurposeSchema, type SenderIdPurpose } from "./sender-id-purpose.js";
import { status2Schema, type Status2 } from "./status2.js";

export type SenderIdRegistration = {
  /** Sender ID Registration Application SID */
  applicationSid: string;
  /** Owning Account SID of the Sender ID */
  accountSid: string;
  /** Status of the Sender ID Registration Application */
  status: Status2;
  /** List of Sender ID Registration information */
  registrationInfo: Record<string, unknown>[];
  /** Purpose for using Sender ID */
  purpose?: SenderIdPurpose;
  /** Whether registering on behalf of subsidiary */
  companySubsidiary?: boolean;
  /** List of emails to send Sender ID Application updates */
  emailsForNotification: string[];
};

export const senderIdRegistrationSchema: Schema<SenderIdRegistration> = s.object<SenderIdRegistration>({
  applicationSid: s.string(),
  accountSid: s.string(),
  status: status2Schema,
  registrationInfo: s.array(s.record(s.string(), s.unknown())),
  purpose: s.optional(s.lazy(() => senderIdPurposeSchema)),
  companySubsidiary: s.optional(s.boolean()),
  emailsForNotification: s.array(s.string()),
  _keysMap: {
    applicationSid: "application_sid",
    accountSid: "account_sid",
    registrationInfo: "registration_info",
    companySubsidiary: "company_subsidiary",
    emailsForNotification: "emails_for_notification",
  },
});
