import React from "react";

function TaskForm({ createTask, name, handleTaskChange }) {
  return (
    <form  className="task-form" onSubmit={createTask}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleTaskChange}
        placeholder="Please Enter The Task"
        className="task-input"
      />
      <button className="task-button" onSubmit={createTask}>Submit</button>
    </form>
  );
}

export default TaskForm;
