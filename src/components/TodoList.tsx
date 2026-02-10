import { useState } from "react";
import type { Todo, Priority } from '../types';
import TodoTable from "./TodoTable";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

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
      <Stack 
        direction="row" 
        spacing={2} 
        alignItems="center" 
        justifyContent="center"
        mt={2}
        mb={2}
      >
        <TextField 
          label="Description"
          value={todo.description}
          onChange={event => setTodo({ ...todo, description: event.target.value })}
        />
        <TextField 
          label="Priority"
          select
          slotProps={{
            select: {
              native: true,
            },
          }}
          value={todo.priority}
          onChange={event => setTodo({ ...todo, priority: event.target.value as Priority})}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </TextField>
        <TextField
          label="Due date"
          value={todo.duedate}
          onChange={event => setTodo({ ...todo, duedate: event.target.value })}
        />
        <Button variant="contained" onClick={handleAdd}>Add Todo</Button>
      </Stack>
      <TodoTable todos={todos} handleDelete={handleDelete} />
    </>
  );
}

export default TodoList;