import { useState } from "react";
import { Input } from "./Input";
import { List } from "./List";
export const Todo = () => {
  const [todo, setTodo] = useState([]);
  return (
    <>
      <Input todo={todo} setTodo={setTodo}></Input>
      <List todo={todo} setTodo={setTodo}></List>
    </>
  );
};
