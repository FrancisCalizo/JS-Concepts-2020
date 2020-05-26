type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type ToggleTodo = (e: SyntheticEvent) => void;

type AddTodo = (e: FormEvent) => void;

type ActionType = 'ADD_TODO';
