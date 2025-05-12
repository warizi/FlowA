import type { TodoCateEntity } from "../domain/TodoCateEntity";
import TodoCateBackService from "../service/TodoCateBackService";

class TodoCateController {
  private todoCateBackService = TodoCateBackService;

  public async getAllTodoCates() {
    return await this.todoCateBackService.getAll();
  }

  public async create(todoCate: TodoCateEntity) {
    return await this.todoCateBackService.save(todoCate);
  }

  public async update(todoCate: TodoCateEntity) {
    return await this.todoCateBackService.save(todoCate);
  }

  public async delete(id: number) {
    return await this.todoCateBackService.delete(id);
  }

  public async findById(id: number | string) {
    return await this.todoCateBackService.findById(id);
  }

}

export default new TodoCateController();
