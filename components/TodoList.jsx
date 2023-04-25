import React from "react";

export const TodoList = ({ taskList }) => {
  return (
    <div className="todos">
      {taskList.map((task) => (
        // /map関数で一つづず取り出す処理をしている。/
        <div className="todo">
          <div className="todo">
            <span>programing</span>
          </div>
          <header>
            <div className="icons">
              <button>
                <i class="fa-solid fa-check"></i>
              </button>
              <button>
                <i class="fa-solid fa-check"></i>
              </button>
            </div>
          </header>
        </div>
      ))}
    </div>
  );
};
