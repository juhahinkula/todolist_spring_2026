import { useState } from "react";
import type { Todo, Priority } from '../types';
import TodoTable from "./TodoTable";

function TodoList() {
  const [todo, setTodo] = useState<Todo>({
    description: "",
    priority: "low",
    duedate: "",
  })
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = () => {
    if (todo.description) {
      setTodos([todo, ...todos]);
      setTodo({
        description: "",
        priority: "low",
        duedate: ""
      })
    }
    else {
      alert("Decription is required");
    }
  }

  const handleDelete = (row: number) => {
    setTodos(todos.filter((_, index) => index != row));
  }

  return(
    <>
      <h3>My Todos</h3>
      <input 
        placeholder="Description"
        value={todo.description}
        onChange={event => setTodo({ ...todo, description: event.target.value })}
      />
      <select 
        title="Priority"
        value={todo.priority}
        onChange={event => setTodo({ ...todo, priority: event.target.value as Priority})}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <input 
        placeholder="Due date"
        type="date"
        value={todo.duedate}
        onChange={event => setTodo({ ...todo, duedate: event.target.value })}
      />
      <button onClick={handleAdd}>Add Todo</button>
      <TodoTable todos={todos} handleDelete={handleDelete} />
    </>
  );
}

export default TodoList;