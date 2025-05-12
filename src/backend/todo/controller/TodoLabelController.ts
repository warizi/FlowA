import type { TodoLabelEntity } from "../domain/TodoLabelEntity";
import TodoLabelBackService from "../service/TodoLabelBackService";

class TodoLabelController {
  private todoLabelBackService = TodoLabelBackService;

  public async getAllTodoLabels() {
    return await this.todoLabelBackService.getAll();
  }

  public async create(todoLabel: TodoLabelEntity) {
    return await this.todoLabelBackService.save(todoLabel);
  }

  public async update(todoLabel: TodoLabelEntity) {
    return await this.todoLabelBackService.save(todoLabel);
  }

  public async delete(id: number) {
    return await this.todoLabelBackService.delete(id);
  }

  public async findById(id: number | string) {
    return await this.todoLabelBackService.findById(id);
  }

}

export default new TodoLabelController();
