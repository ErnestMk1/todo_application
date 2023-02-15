import Todo from './Todo';
import css from './TodoList.module.css';
import uuid from 'react-uuid';

type TodoListParams = {
  todos: Array<any>;
  filteredTodos: Array<any>;
  setTodos: (value: any) => void;
};

const TodoList = ({ todos, filteredTodos, setTodos }: TodoListParams) => {
  return (
    <div className={css.main_div}>
      <ul className={css.todo_list}>
        {filteredTodos.map(todo => (
          <Todo
            key={uuid()}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
