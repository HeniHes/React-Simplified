import react, { useState } from "react";

import "./styles.css";
function ToDoList() {
  const [tasks, setTasks] = useState([
    "Eat Breakfast",
    "take a shower",
    "walk the dog",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function addTask() {
    setTasks((t) => [...t, newTask]);
    setNewTask("");
  }
  function deleteTask(index) {}
  function moveTaskUp(index) {}
  function upTaskUp(index) {}

  return (
    <div className="to-do-container">
      <h1>To Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task ..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <div>
              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
              <button className="up-button" onClick={() => moveTaskUp(index)}>
                Up
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
