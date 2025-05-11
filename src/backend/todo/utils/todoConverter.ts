import type { Todo, TodoCreate } from "@entities/todo";
import type { TodoEntity, TodoCreateEntity } from "../domain/TodoEntity";
import type { TodoResDto } from "../dto/TodoResDto";
import type { TodoLabelEntity } from "../domain/TodoLabelEntity";
import { formatDate } from "./formatDate";

export function toTodoDbModel(data: Todo | TodoCreate): TodoEntity | TodoCreateEntity {
  return {
    ...data,
    sub: JSON.stringify(data.sub) ?? undefined,
    isDone: data.isDone ? 1 : 0,
    isImportant: data.isImportant ? 1 : 0,
    labelId: data.label?.id ?? undefined,
  }
}

export function toTodoModel(data: TodoEntity[], labels: TodoLabelEntity[]): TodoResDto[] {
  return data.map((todo) => {
    const label = labels.find(label => label.id === todo.labelId);
    return {
      ...todo,
      sub: todo.sub ? JSON.parse(todo.sub) : undefined,
      isDone: todo.isDone === 1,
      isImportant: todo.isImportant === 1,
      label: label ?? null,
    }
  })
}

export function sortOrderTodoList(todos: TodoResDto[]): TodoResDto[] {
  return todos.sort((a, b) => {
    return a.order - b.order;
  });
}

export function filterNotDoneOrDoneToday(todos: TodoResDto[]): TodoResDto[] {
  return todos.filter((todo) => {
    const { doneDate } = todo;

    if (!doneDate) {
      return true
    };

    const today = formatDate(new Date(), "yyyy-MM-dd");
    return formatDate(doneDate, "yyyy-MM-dd") === today;
  });
}