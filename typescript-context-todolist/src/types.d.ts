interface Todo {
  title: string;
  completed: boolean;
}

type ToggleTodo = (id: string) => void;

type AddTodo = (id: string) => void;
