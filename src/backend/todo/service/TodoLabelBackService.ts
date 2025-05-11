import type { TodoLabelEntity } from "../domain/TodoLabelEntity";
import TodoLabelRepository from "../repository/TodoLabelRepository";

class TodoLabelBackService {
  private todoLabelRepository = TodoLabelRepository;

  async getAll(): Promise<TodoLabelEntity[]> {
    const todoLabels = await this.todoLabelRepository.getAll();
    return todoLabels.sort((a, b) => {
      return a.order - b.order;
    });
  }

  async save(todoLabel: TodoLabelEntity): Promise<void> {
    await this.todoLabelRepository.save(todoLabel);
  }

  async delete(id: number): Promise<void> {
    await this.todoLabelRepository.delete(id);
  }

  async findById(id: number | string): Promise<TodoLabelEntity | undefined> {
    const todoLabel = await this.todoLabelRepository.getById(id);
    return todoLabel;
  }
}

export default new TodoLabelBackService();
