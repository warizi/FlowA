import type { z } from "zod"
import { TodoCateCreateSchema, TodoCateSchema, TodoCreateSchema, TodoLabelCreateSchema, TodoLabelSchema, TodoSchema } from "./schema"

export type TodoCate = z.infer<typeof TodoCateSchema>
export type TodoCateCreate = z.infer<typeof TodoCateCreateSchema>

export type Todo = z.infer<typeof TodoSchema>
export type TodoCreate = z.infer<typeof TodoCreateSchema>

export type TodoLabel = z.infer<typeof TodoLabelSchema>
export type TodoLabelCreate = z.infer<typeof TodoLabelCreateSchema>
