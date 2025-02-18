import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const MockMate = pgTable('mockInterview', {
    id: serial('id').primaryKey(),
    jsonMockResp: text('jsonMockResp').notNull(),
    jobPosition: varchar('jobPosition').notNull(),
    jobDesc: varchar('jobDesc').notNull(),
    jobExperience: varchar('jobExperience').notNull(),
    createBy: varchar('createdBy').notNull(),
    createdAt: varchar('createdAt'),
    mockId: varchar('mockId').notNull(),
})