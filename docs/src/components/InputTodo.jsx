import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled, todos } = props;
  return (
    <div className="input-area">
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
      {todos.length >= 5 && (
        <p class="input-error">
          登録できるTODOは5個までです。
          <span role="img" aria-label="poo">
            &#x1f4a9;
          </span>
        </p>
      )}
    </div>
  );
};
