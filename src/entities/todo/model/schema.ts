import { IdSchema } from "@shared/common/schema/idSchema";
import { z } from "zod";

export const TodoCateSchema = z.object({
  id: IdSchema,
  name: z.string(),
  order: z.number().default(0),
}).strict();
export const TodoCateCreateSchema = TodoCateSchema.omit({ id: true }).strict();

export const TodoLabelSchema = z.object({
  id: IdSchema,
  name: z.string().min(1, { message: "라벨 이름은 필수입니다." }),
  order: z.number().default(0),
  color: z.string().min(1, { message: "라벨 색상은 필수입니다." }),
}).strict();
export const TodoLabelCreateSchema = TodoLabelSchema.omit({ id: true }).strict();

export const TodoSubSchema = z.object({
  text: z.string().min(1, { message: "서브 할일은 필수입니다." }),
  isDone: z.boolean().default(false),
}).strict();

export const TodoSchema = z.object({
  id: IdSchema,
  title: z.string().min(1, { message: "할일 제목은 필수입니다." }),
  isDone: z.boolean().default(false),
  sub: z.array(TodoSubSchema).optional(),
  order: z.number().default(0),
  isImportant: z.boolean().default(false),
  cateId: IdSchema.optional(),
  memo: z.string().optional(),
  doneDate: z.string().nullable().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  repeatType: z.string().optional(),
  repeatDate: z.string().optional(),
  label: TodoLabelSchema.nullable().optional(),
  updatedAt: z.string().optional(),
  createdAt: z.string().optional(),
}).strict();
export const TodoCreateSchema = TodoSchema.omit({ id: true }).strict();
