import { useRecoilValue } from "recoil";
import { TodoItemCreator } from "./TodoItemCreator";
import { TodoItem } from "./TodoItem";
import { TodoListFilter } from "./TodoListFilter";
import { TodoListStatus } from "./TodoListStatus";

import { filteredTodoListState } from "../selectors";

export const TodoList = () => {
  // filteredTodoListStateをサブスク
  // 実質todoListFilterStateとtodoListStateをサブスクしている
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStatus />
      <TodoListFilter />
      <TodoItemCreator />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "20px",
          width: "100px",
        }}
      >
        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))}
      </div>
    </>
  );
};
