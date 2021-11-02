import { useRecoilValue } from "recoil";

import { todoListStatusState } from "../selectors";

export const TodoListStatus = () => {
  // todoListStatusStateは内部でfilteredTodoListStateを参照しているため
  // 実質todoListStateとtodoListFilterStateのアトムをサブスクしている事になる
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatusState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items not completed: {totalUncompletedNum}</li>
      <li>Percent completed: {formattedPercentCompleted}</li>
    </ul>
  );
};
