import type { Todo, TodoCreate } from "@entities/todo";
import type { TodoEntity, TodoCreateEntity } from "../domain/TodoEntity";

export function toTodoDbModel(data: Todo | TodoCreate): TodoEntity | TodoCreateEntity {
  return {
    ...data,
    sub: JSON.stringify(data.sub) ?? undefined,
    isDone: data.isDone ? 1 : 0,
    isImportant: data.isImportant ? 1 : 0,
    labelId: data.label?.id ?? undefined,
  }
}
