import { s, type Schema } from "../core/index.js";

export type RecordingAddOnResultPayloadData = {
  redirectTo?: string | null;
};

export const recordingAddOnResultPayloadDataSchema: Schema<RecordingAddOnResultPayloadData> =
  s.object<RecordingAddOnResultPayloadData>({
    redirectTo: s.optionalNullable(s.string()),
    _keysMap: {
      redirectTo: "redirect_to",
    },
  });
