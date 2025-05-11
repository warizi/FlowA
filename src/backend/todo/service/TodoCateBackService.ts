import type { TodoCateCreateEntity, TodoCateEntity } from "../domain/TodoCateEntity";
import TodoCateRepository from "../repository/TodoCateRepository";
import { todoRepository } from "../repository/TodoRepository";

class TodoCateBackService {
  private todoCateRepository = TodoCateRepository;
  private todoRepository = todoRepository;

  public async getAll(): Promise<TodoCateEntity[]> {
    const todoCates = await this.todoCateRepository.getAll();
    return todoCates.sort((a, b) => {
      return a.order - b.order;
    });
  }

  public async save(todoCate: TodoCateEntity | TodoCateCreateEntity): Promise<void> {
    if ("id" in todoCate) {
      await this.todoCateRepository.save(todoCate);
    } else {
      todoCate.order = await this.newOrder();
      await this.todoCateRepository.save(todoCate);
    }
  }

  public async delete(id: number): Promise<void> {
    const todoListByCateId = await this.todoRepository.findByCateId(id);
    if (todoListByCateId.length > 0) {
      for (const todo of todoListByCateId) {
        await this.todoRepository.deleteById(todo.id);
      }
    }
    await this.todoCateRepository.delete(id);
  }

  public async findById(id: number | string): Promise<TodoCateEntity | undefined> {
    const todoCate = await this.todoCateRepository.getById(id);
    return todoCate;
  }

  private async newOrder(): Promise<number> {
    const todoCates = await this.todoCateRepository.getAll();
    const maxOrder = todoCates.reduce((max, todoCate) => {
      return Math.max(max, todoCate.order);
    }, 0);

    return maxOrder + 1;
  }
  
}

export default new TodoCateBackService();
