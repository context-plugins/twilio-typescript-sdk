import { s, type Schema } from "../core/index.js";
import { senderIdPurposeSchema, type SenderIdPurpose } from "./sender-id-purpose.js";
import { status2Schema, type Status2 } from "./status2.js";

export type SenderIdRegistration = {
  applicationSid: string;
  accountSid: string;
  status: Status2;
  registrationInfo: Record<string, unknown>[];
  purpose?: SenderIdPurpose;
  companySubsidiary?: boolean;
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
