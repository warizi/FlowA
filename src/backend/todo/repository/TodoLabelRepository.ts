import { flowaDb } from "@backend/config/indexedDbConfig";
import type { TodoLabelCreateEntity, TodoLabelEntity } from "../domain/TodoLabelEntity";

class TodoLabelRepository {
  public async getAll(): Promise<TodoLabelEntity[]> {
    const todoLabels = await flowaDb.todoLabel.toArray() as TodoLabelEntity[];

    return todoLabels;
  }

  public async save(todoLabel: TodoLabelEntity | TodoLabelCreateEntity): Promise<TodoLabelEntity> {
    if ("id" in todoLabel) {
      const updatedTodoLabel = await flowaDb.todoLabel.update(todoLabel.id, todoLabel);
      if (updatedTodoLabel) {
        return todoLabel;
      }
    } else {
      const id = await flowaDb.todoLabel.add(todoLabel);
      return { ...todoLabel, id };
    }

    return todoLabel;
  }

  public async delete(id: number): Promise<void> {
    await flowaDb.todoLabel.delete(id);
  }

  public async getById(id: number | string): Promise<TodoLabelEntity | undefined> {
    const todoLabel = await flowaDb.todoLabel.get(id) as TodoLabelEntity;

    return todoLabel;
  }
}

export default new TodoLabelRepository();
