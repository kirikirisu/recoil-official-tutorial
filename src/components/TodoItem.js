import { useRecoilState } from "recoil";
import { todoListState } from "../atoms";

const replaceItemAtIndex = (arr, index, newValue) => {
  // slice(0, index) = 0 ~ indexまでの要素を返す
  // slice(index + 1) まで削る
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

const removeItenAtIndex = (arr, index) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

export const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItenAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
};
