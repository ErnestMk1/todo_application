import uuid from "react-uuid";
import css from "./Form.module.css";
import { ALL, COMPLETED, UNCOMPLETED } from '../../App';

type FormParams = {
  todos: Array<object>;
  setTodos: (value: any) => void;
  inputData: string;
  setInputData: (value: string) => void;
  setStatus: (value: any) => void;
}

const Form = ({ todos, setTodos, inputData, setInputData, setStatus }: FormParams) => {
  const inputHandler = (e: any) => {
    e.preventDefault();
    setInputData(e.target.value);
  };
  const submitHandler = (e: any) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        task: inputData,
        completed: false,
        id: uuid(),
      }
    ]);
    setInputData('');
  };

  return (
    <div className={css.main_div}>
      <form>
        <input
          type="text"
          value={inputData}
          placeholder="Type in your task...)"
          onChange={inputHandler}
          className={css.todo_input}
        />
        <button
          type="submit"
          onClick={submitHandler}
          className={css.todo_button}
        >
          <i className="fas fa-plus-square">
        </i></button>

        <div className={css.select}>
          <select
            name="status changer"
            onChange={(e) => setStatus(e.target.value)}
            className={css.filter_todo}
          >
            <option value={ALL}>All</option>
            <option value={COMPLETED}>Completed</option>
            <option value={UNCOMPLETED}>Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
