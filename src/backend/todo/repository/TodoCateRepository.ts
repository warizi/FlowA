import { flowaDb } from "@backend/config/indexedDbConfig";
import type { TodoCateCreateEntity, TodoCateEntity } from "../domain/TodoCateEntity";

class TodoCateRepository {
  public async getAll(): Promise<TodoCateEntity[]> {
    const todoCates = await flowaDb.todoCate.toArray() as TodoCateEntity[];

    return todoCates;
  }

  public async getById(id: number): Promise<TodoCateEntity | undefined> {
    const todoCate = await flowaDb.todoCate.get(id) as TodoCateEntity;

    return todoCate;
  }

  public async save(todoCate: TodoCateEntity | TodoCateCreateEntity): Promise<TodoCateEntity> {
    if ("id" in todoCate) {
      const updatedTodoCate = await flowaDb.todoCate.update(todoCate.id, todoCate);
      if (updatedTodoCate) {
        return todoCate;
      }
    } else {
      const id = await flowaDb.todoCate.add(todoCate);
      return { ...todoCate, id };
    }

    return todoCate;
  }

  public async delete(id: number): Promise<void> {
    await flowaDb.todoCate.delete(id);
  }

}

export default new TodoCateRepository();