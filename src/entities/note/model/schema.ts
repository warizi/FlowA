import { IdSchema } from "@shared/common/schema/idSchema";
import { z } from "zod";

export const NoteCateSchema = z.object({
  id: IdSchema,
  name: z.string().min(1, { message: "카테고리 이름은 필수입니다." }),
  order: z.number().default(0),
}).strict();
export const NoteCateCreateSchema = NoteCateSchema.omit({ id: true }).strict();

export const NoteLabelSchema = z.object({
  id: IdSchema,
  name: z.string().min(1, { message: "라벨 이름은 필수입니다." }),
  order: z.number().default(0),
  color: z.string().min(1, { message: "라벨 색상은 필수입니다." }),
}).strict();
export const NoteLabelCreateSchema = NoteLabelSchema.omit({ id: true }).strict();

export const NoteSchema = z.object({
  id: IdSchema,
  title: z.string().min(1, { message: "노트 제목은 필수입니다." }),
  content: z.string().min(1, { message: "노트 내용은 필수입니다." }).default(""),
  order: z.number().default(0),
  cateId: IdSchema.optional(),
  label: NoteLabelSchema.nullable().optional(),
  isImportant: z.boolean().default(false),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
}).strict();
export const NoteCreateSchema = NoteSchema.omit({ id: true }).strict();

