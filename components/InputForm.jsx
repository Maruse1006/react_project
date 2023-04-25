import React, { useState } from "react";

export const InputForm = ({ taskList, setTaskList }) => {
  // taskListとsetTaskListは{}で囲む
  const [inputText, setInputText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskList([
      ...taskList,
      //   以前のからの情報が入っている状態

      {
        id: taskList.length,
        text: inputText,
        // テクストプロパティを持ったinputtextを追加している。
        // 以前のタスク情報にスプレット構文を追加する。
        completed: false,
      },
    ]);
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
    console.log(inputText);
  };

  return (
    <div className="inputForm">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputText} />{" "}
        {/* valueを追加 */}
        <button>
          <i className="fa-light fa-square-plus"></i>
        </button>
      </form>
    </div>
  );
};
