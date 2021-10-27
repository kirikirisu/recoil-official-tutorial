import { RecoilRoot } from "recoil";
import { TodoList } from "./components/TodoList";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
};

export default App;
