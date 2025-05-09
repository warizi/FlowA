import Dexie, { type EntityTable } from "dexie";
import type { Note, NoteCate, NoteLabel } from "@entities/note";
import type { Todo, TodoCate, TodoLabel } from "@entities/todo";

export interface FlowaDb extends Dexie {
  todoCate: EntityTable<TodoCate, "id">;
  todoLabel: EntityTable<TodoLabel, "id">;
  todo: EntityTable<Todo, "id">;
  noteCate: EntityTable<NoteCate, "id">;
  noteLabel: EntityTable<NoteLabel, "id">;
  note: EntityTable<Note, "id">;
}

export function createFlowaDb(dbName: string = "flowa2Db"): FlowaDb {
  const db = new Dexie(dbName) as FlowaDb;

  db.version(1).stores({
    todoCate: "++id, name, order",
    todo: "++id, title, isDone, sub, order, isImportant, startDate, endDate, repeatType, repeatDate, memo, cateId, doneDate",
    todoLabel: "++id, name, order, color",
    noteCate: "++id, name, order",
    noteLabel: "++id, name, order, color",
    note: "++id, title, order, isImportant, content, labelId, cateId, createdAt, updatedAt",
  });

  return db;
}

export const flowaDb = createFlowaDb();
