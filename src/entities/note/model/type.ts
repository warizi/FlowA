import type { z } from "zod";
import type { NoteCateCreateSchema, NoteCateSchema, NoteCreateSchema, NoteLabelCreateSchema, NoteLabelSchema, NoteSchema } from "./schema";

export type NoteCate = z.infer<typeof NoteCateSchema>;
export type NoteCateCreate = z.infer<typeof NoteCateCreateSchema>;

export type NoteLabel = z.infer<typeof NoteLabelSchema>;
export type NoteLabelCreate = z.infer<typeof NoteLabelCreateSchema>;

export type Note = z.infer<typeof NoteSchema>;
export type NoteCreate = z.infer<typeof NoteCreateSchema>;