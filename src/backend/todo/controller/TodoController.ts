import type { TodoCreateDto, TodoDto } from "../dto/TodoDto";
import TodoBackService from "../service/TodoBackService";

class TodoController {
  private todoBackService = TodoBackService;

  public async getAllTodos() {
    return await this.todoBackService.getAllTodos();
  }

  public async getAllCountNotIsDone() {
    const data = (await this.todoBackService.getAllTodos()).filter(
      (todo) => todo.isDone === false
    )
    return data.length;
  }

  public async getAllByIsDone() {
    return await this.todoBackService.getAllByIsDone();
  }

  public async findByCateId(id: number) {
    return await this.todoBackService.findByCateId(id);
  }

  public async getAllByCateId(id: number) {
    return await this.todoBackService.findByCateId(id);
  }

  public async getAllByCateIdCountNotIsDone(id: number) {
    const data = (await this.todoBackService.findByCateId(id)).filter(
      (todo) => todo.isDone === false
    )
    return data.length;
  }

  public async getAllByCateIdAndIsDone(id: number) {
    return await this.todoBackService.findByCateIdAndIsDone(id);
  }

  public async getAllByImportant() {
    return await this.todoBackService.findByImportant();
  }

  public async getAllByImportantCount() {
    const data = (await this.todoBackService.findByImportant()).filter(
      (todo) => todo.isDone === false
    )
    return data.length;
  }

  public async getAllByImportantAndIsDone() {
    return await this.todoBackService.findByImportantAndIsDone();
  }

  public async getAllByToday() {
    return await this.todoBackService.findTodayByStartDateAndEndDate();
  }

  public async getAllByTodayCount() {
    const data = (await this.todoBackService.findTodayByStartDateAndEndDate()).filter(
      (todo) => todo.isDone === false
    )
    return data.length;
  }

  public async updateDone(id: number | string, isDone: boolean) {
    await this.todoBackService.updateDone(id, isDone ? 1 : 0);
  }

  public async create(data: TodoCreateDto) {
    await this.todoBackService.saveTodo(data);
  }

  public async update(data: TodoDto) {
    await this.todoBackService.saveTodo(data);
  }

  public async delete(id: number | string) {
    await this.todoBackService.deleteTodo(id);
  }

  public async findById(id: number | string) {
    return await this.todoBackService.getById(id);
  }

}

export default new TodoController();