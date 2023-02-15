import css from './TodoList.module.css';

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
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  return (
    <div className={css.main_div}>
      <li className={`${css.todo_item} ${todo.completed ? css.completed : ''}`}>{todo.task}</li>
      <button className={css.complete_btn} onClick={completeHandler}>
        <i className={`${css.fas} ${css.fa_check}`}></i>
      </button>
      <button className={css.trash_btn} onClick={deleteHandler}>
        <i className={`${css.fas} ${css.fa_trash}`}></i>
      </button>
    </div>
  );
};

export default Todo;
