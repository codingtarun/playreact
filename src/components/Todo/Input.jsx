import { useState } from "react";

export const Input = ({ todo, setTodo }) => {
  const [taskInput, setTaskInput] = useState("");
  function addTask(newTask) {
    setTodo([...todo, newTask]);
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    if (!taskInput) return;
    const newTask = {
      id: Date.now(),
      task: taskInput,
      isComplete: false,
    };
    addTask(newTask);
    handleResetButton();
  }
  function handleInputChange(e) {
    setTaskInput(e.target.value);
  }
  function handleResetButton() {
    setTaskInput("");
  }
  return (
    <>
      <form className="flex space-x-3 w-full" onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Add a task"
          class="p-2 border border-gray-300 rounded"
          name="task"
          value={taskInput}
          id="task"
          onChange={handleInputChange}
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Add
        </button>
        <button
          type="button"
          className="p-2 bg-green-500 text-white rounded"
          onClick={handleResetButton}
        >
          <i className="fa-solid fa-arrow-rotate-left"></i>
        </button>
      </form>
    </>
  );
};
