import { useState } from "react";
import "./App.css";
import { InputForm } from "./components/InputForm";
import { Title } from "./components/Title";
import { TodoList } from "./components/TodoList";

function App() {
  const [taskList, setTaskList] = useState([]);
  // taskListという形を用意するし、状態を管理する変数
  // setTaskListは中身の状態を変更するための関数。
  return (
    <div className="body">
      <Title />
      <InputForm taskList={taskList} setTaskList={setTaskList} />
      {/* inputフォームのタグの中にtaskListとsetTaskListの変数を渡している。 */}
      <TodoList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;
