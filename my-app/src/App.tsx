import { useState, useEffect } from 'react';
import css from './App.module.css';
import Form from './components/Form/Form';
import TodoList from './components/Todo/TodoList';
import uuid from 'react-uuid';

export const ALL = "all";
export const COMPLETED = 'completed';
export const UNCOMPLETED = 'uncompleted';

const App = () => {
  const todosInitialState = [
    {
      task: "Follow me on social media!",
      completed: false,
      id: uuid(),
    },
    {
      task: "Believe in yourself!)",
      completed: false,
      id: uuid(),
    },
  ];

  const [todos, setTodos] = useState(todosInitialState);
  const [status, setStatus] = useState(ALL);
  const [filteredTodos, setFilteredTodos] = useState(todosInitialState);
  const [inputData, setInputData] = useState('');

  useEffect(() => {
    switch (status) {
      case COMPLETED:
        setFilteredTodos(todos.filter((item) => item['completed'] === true));
        break;
      case UNCOMPLETED:
        setFilteredTodos(todos.filter((item) => item['completed'] === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }, [status, todos])

  return (
    <div className={css.main_div}>
      <header><h1>To Do</h1></header>

      <Form
        todos={todos}
        setTodos={setTodos}
        inputData={inputData}
        setInputData={setInputData}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        filteredTodos={filteredTodos}
        setTodos={setTodos}
      />
    </div>
  );
};

export default App;
