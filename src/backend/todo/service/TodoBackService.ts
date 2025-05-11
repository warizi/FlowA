import type { TodoCreateResDto, TodoResDto } from "../dto/TodoResDto";
import TodoLabelRepository from "../repository/TodoLabelRepository";
import { todoRepository } from "../repository/TodoRepository";
import { filterNotDoneOrDoneToday, sortOrderTodoList, toTodoDbModel, toTodoModel } from "../utils/todoConverter";

class TodoBackService {
  private todoRepository = todoRepository;
  private todoLabelRepository = TodoLabelRepository;
  
  public async getAllTodos(): Promise<TodoResDto[]> {
    const todos = await this.todoRepository.getAll();
    const todoLabels = await this.todoLabelRepository.getAll();

    return sortOrderTodoList(filterNotDoneOrDoneToday(toTodoModel(todos, todoLabels)));
  };

  public async getAllByIsDone(): Promise<TodoResDto[]> {
    const todos = await this.todoRepository.getAllByIsDone();
    const todoLabels = await this.todoLabelRepository.getAll();

    return sortOrderTodoList(toTodoModel(todos, todoLabels));
  }

  public async findByCateId(id: number): Promise<TodoResDto[]> {
    const todos = await this.todoRepository.findByCateId(id);
    const todoLabels = await this.todoLabelRepository.getAll();

    return sortOrderTodoList(filterNotDoneOrDoneToday(toTodoModel(todos, todoLabels)));
  }

  public async findByCateIdAndIsDone(id: number): Promise<TodoResDto[]> {
    const todos = await this.todoRepository.findByCateIdAndIsDone(id, 1);
    const todoLabels = await this.todoLabelRepository.getAll();

    return sortOrderTodoList(toTodoModel(todos, todoLabels));
  }

  public async findTodayByStartDateAndEndDate(): Promise<TodoResDto[]> {
    const todos = await this.todoRepository.findExistedToday();
    const todoLabels = await this.todoLabelRepository.getAll();

    return sortOrderTodoList(filterNotDoneOrDoneToday(toTodoModel(todos, todoLabels)));
  }

  public async saveTodo(todo: TodoResDto | TodoCreateResDto): Promise<void> {
    if ("id" in todo) {
      await this.todoRepository.save(toTodoDbModel(todo));
    } else {
      todo.order = await this.newOrder();
      await this.todoRepository.save(toTodoDbModel(todo));
    }
  }

  public async findByImportant(): Promise<TodoResDto[]> {
    const todos = await this.todoRepository.findByImportant(1);
    const todoLabels = await this.todoLabelRepository.getAll();
    return sortOrderTodoList(filterNotDoneOrDoneToday(toTodoModel(todos, todoLabels)));
  }

  public async findByImportantAndIsDone(): Promise<TodoResDto[]> {
    const todos = await this.todoRepository.findByImportantAndIsDone(1, 1);
    const todoLabels = await this.todoLabelRepository.getAll();
    return sortOrderTodoList(toTodoModel(todos, todoLabels));
  }

  public async updateDone(id: number | string, isDone: 0 | 1): Promise<void> {
    const todo = await this.todoRepository.getById(id);
    if (todo) {
      todo.isDone = isDone;
      await this.todoRepository.save(todo);
    }
  }

  public async deleteTodo(id: number | string): Promise<void> {
    await this.todoRepository.deleteById(id);
  }

  public async getById(id: number | string): Promise<TodoResDto | undefined> {
    const todo = await this.todoRepository.getById(id);
    const todoLabels = await this.todoLabelRepository.getAll();
    if (todo) {
      return toTodoModel([todo], todoLabels)[0];
    }
    return undefined;
  }

  private async newOrder(): Promise<number> {
    const todos = await this.todoRepository.getAll();
    const maxOrder = Math.max(...todos.map((todo) => todo.order));
    return maxOrder + 1000;
  }
}

export default new TodoBackService();