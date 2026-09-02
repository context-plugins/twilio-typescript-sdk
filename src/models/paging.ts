import { s, type Schema } from "../core/index.js";

export type Paging = {
  uri?: string | null;
  nextPageUri?: string | null;
  previousPageUri?: string | null;
  pageSize?: number | null;
  numPages?: number | null;
  total?: number | null;
  beforeSid?: string | null;
  afterSid?: string | null;
};

export const pagingSchema: Schema<Paging> = s.object<Paging>({
  uri: s.optionalNullable(s.string()),
  nextPageUri: s.optionalNullable(s.string()),
  previousPageUri: s.optionalNullable(s.string()),
  pageSize: s.optionalNullable(s.number()),
  numPages: s.optionalNullable(s.number()),
  total: s.optionalNullable(s.number()),
  beforeSid: s.optionalNullable(s.string()),
  afterSid: s.optionalNullable(s.string()),
  _keysMap: {
    nextPageUri: "next_page_uri",
    previousPageUri: "previous_page_uri",
    pageSize: "page_size",
    numPages: "num_pages",
    beforeSid: "before_sid",
    afterSid: "after_sid",
  },
});
