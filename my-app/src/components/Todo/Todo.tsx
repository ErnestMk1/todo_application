import css from './TodoList.module.css';
import { useRef } from 'react';

type TodoParams = {
  todo: {
    task: string;
    completed: boolean;
    id: number | string;
  };
  todos: Array<any>;
  setTodos: (value: any) => void;
};

const Todo = ({ todo, todos, setTodos }: TodoParams) => {
  const mainDiv = useRef<HTMLDivElement>(null);

  const completeHandler = () => {
    setTodos(todos.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item,
          completed: !todo.completed,
        };
      }

      return item;
    }));
  };
  const deleteHandler = () => {
    if (mainDiv.current) {
      mainDiv.current.classList.add(`${css.fall}`);
    }

    setTimeout(() => {
      setTodos(todos.filter((item) => item.id !== todo.id));
    }, 1000);
  };

  return (
    <div ref={mainDiv} className={css.todo}>
      <li className={`${css.todo_item} ${todo.completed ? css.completed : ''}`}>{todo.task}</li>
      <button className={css.complete_btn} onClick={completeHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button className={css.trash_btn} onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
