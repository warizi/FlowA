import { flowaDb } from "@backend/config/indexedDbConfig";
import type { TodoEntity, TodoCreateEntity } from "../domain/TodoEntity";
import { formatDate } from "../utils/formatDate";

class TodoRepository {

  public async getAll(): Promise<TodoEntity[]> {
    const todos = await flowaDb.todo.toArray() as TodoEntity[];

    return todos;
  }

  public async getById(id: number | string): Promise<TodoEntity | undefined> {
    const todo = await flowaDb.todo.get(id) as TodoEntity;

    return todo;
  }

  public async getAllByIsDone(): Promise<TodoEntity[]> {
    const todos = await flowaDb.todo
      .where("isDone")
      .equals(1)
      .toArray() as TodoEntity[];
    return todos;
  }

  public async save(todo: TodoEntity | TodoCreateEntity): Promise<TodoEntity> {
    if ("id" in todo) {
      const updatedTodo = await flowaDb.todo.update(todo.id, todo);
      if (updatedTodo) {
        return todo;
      }
    } else {
      const id = await flowaDb.todo.add(todo);
      return { ...todo, id };
    }

    return todo;
  }

  public async findByImportant(isImportant: 0 | 1): Promise<TodoEntity[]> {
    const todos = await flowaDb.todo.where("isImportant").equals(isImportant).toArray() as TodoEntity[];

    return todos;
  }

  public async findByImportantAndIsDone(isImportant: 0 | 1, isDone: 0 | 1): Promise<TodoEntity[]> {
    const todos = await flowaDb.todo
      .where("isImportant")
      .equals(isImportant)
      .and((todo) => todo.isDone === isDone)
      .toArray() as TodoEntity[];

    return todos;
  }

  async findExistedToday(): Promise<TodoEntity[]> {
    const today = formatDate(new Date(), "yyyy-MM-dd");

    const todos = await flowaDb.todo
      .filter((todo: TodoEntity) => {
        const { startDate, endDate } = todo;
  
        if (!startDate) return false;
  
        const start = formatDate(startDate, "yyyy-MM-dd");
        const end = endDate ? formatDate(endDate, "yyyy-MM-dd") : undefined;
  
        if (end) {
          return start <= today && today <= end;
        }
  
        return start === today;
      })
      .toArray();

    return todos;
  }

  async findByCateId(cateId: number | string): Promise<TodoEntity[]> {
    const todos = await flowaDb.todo.where("cateId").equals(cateId).toArray() as TodoEntity[];

    return todos;
  }

  async findByCateIdAndIsDone(cateId: number | string, isDone: 0 | 1): Promise<TodoEntity[]> {
    const todos = await flowaDb.todo
      .where("cateId")
      .equals(cateId)
      .and((todo) => todo.isDone === isDone)
      .toArray() as TodoEntity[];

    return todos;
  }

  async deleteById(id: number | string): Promise<void> {
    await flowaDb.todo.delete(id);
  }
  
}

export const todoRepository = new TodoRepository();