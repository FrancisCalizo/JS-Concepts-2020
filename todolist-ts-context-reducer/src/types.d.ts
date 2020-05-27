type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type HandleChange = (e: SyntheticEvent) => void;

type AddTodo = (inputText: string) => void;

type ToggleTodo = (id: string) => void;

interface IContextState {
  todos: Todo[];
  addTodo: AddTodo;
  toggleTodo: ToggleTodo;
}

interface IState {
  todos: Todo[];
}

type Action =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: Todo[] };
