type Todo = {
  id: number;
  name: string;
  completed: boolean;
};

type ToggleTodo<T> = (event: T) => void;
