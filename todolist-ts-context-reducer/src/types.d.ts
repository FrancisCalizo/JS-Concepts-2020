type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type ToggleTodo = (e: SyntheticEvent) => void;

type AddTodo = (inputText: string) => void;

type ActionType = 'ADD_TODO' | 'TOGGLE_TODO';

type PayloadType = Todo[] | string;

interface IState {
  todos: Todo[];
}

type Action = { type: 'ADD_TODO'; payload: string };
