import { useState } from "react";

type Todo = {
  description: string;
  priority: Priority;
  duedate: string;
}

type Priority = "low" | "medium" | "high";

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

  const handleDelete = (row: number) => { // row = 2
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
      <table>
        <thead>
          <tr>
            <th>Desription</th>
            <th>Priority</th>
            <th>Due date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            todos.map((todo: Todo, index) => 
              <tr key={index}>
                <td>{todo.description}</td>
                <td>{todo.priority}</td>
                <td>{todo.duedate}</td>
                <td>
                  <button onClick={() => handleDelete(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </>
  );
}

export default TodoList;