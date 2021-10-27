import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../atoms";

// コンポーネントがアンマウントされない限り、idは保持される
let id;
const getId = () => {
  return id++;
};

export const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  const addItem = () => {
    setTodoList((prevTodoList) => [
      ...prevTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);

    setInputValue("");
  };

  return (
    <>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </>
  );
};
