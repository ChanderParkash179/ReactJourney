/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "todo message",
      completed: false
    }
  ],
  add: (todo) => { },
  update: (id, todo) => { },
  remove: (id) => { },
  toggleComplete: (id) => { },
});


export const TodoProvider = TodoContext.Provider;


export default function useTodo() {
  return useContext(TodoContext);
}