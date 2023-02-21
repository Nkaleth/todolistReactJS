import { useState, useEffect } from 'react';
import InputTodo from 'components/InputTodo';
import TodosList from 'components/TodosList';
import { v4 as uuidv4 } from 'uuid';

function getInitialTodos() {
  // getting stored items
  const temp = localStorage.getItem('todos');
  const savedTodos = JSON.parse(temp);
  return savedTodos || [];
}

const TodosLogic = () => {
  const [todos, setTodos] = useState(getInitialTodos());
  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => todo.id !== id),
    ]);
  };
  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        const newtodo = todo;
        if (newtodo.id === id) {
          newtodo.title = updatedTitle;
        }
        return newtodo;
      }),
    );
  };
  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);
  return (
    <div>
      <InputTodo addTodoItem={addTodoItem} />
      <TodosList
        todosProps={todos}
        setTodos={setTodos}
        delTodo={delTodo}
        setUpdate={setUpdate}
      />
    </div>
  );
};
export default TodosLogic;
