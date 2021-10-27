import { useRecoilValue } from "recoil";
import { TodoItemCreator } from "./TodoItemCreator";
import { TodoItem } from "./TodoItem";

import { todoListState } from "../atoms/index";

export const TodoList = () => {
  // todoListStateをサブスク
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};
