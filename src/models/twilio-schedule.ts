import { s, type Schema } from "../core/index.js";

export type TwilioSchedule = {
  id: string;
  title: string;
  timeSlots: string;
};

export const twilioScheduleSchema: Schema<TwilioSchedule> = s.object<TwilioSchedule>({
  id: s.string(),
  title: s.string(),
  timeSlots: s.string(),
});
