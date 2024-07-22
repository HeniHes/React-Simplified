import "./styles.css";

import ToDoList from "./ToDoList";

function App() {
  return <ToDoList></ToDoList>;
}

export default App;

// const [newTodoName, setNewTodoName] = useState("");

// const [todos, setTodos] = useState([]);

// function addNewTodo() {
//   setTodos((currentTodos) => {
//     return [
//       ...currentTodos,
//       { name: newTodoName, completed: false, id: crypto.randomUUID() },
//     ];
//   });
//   setNewTodoName("");
// }
// return (
//   <div id="new-todo-form">
//     {JSON.stringify(todos)}
//     <label for="todo-input">New Todo</label>
//     <input
//       type="text"
//       id="todo-input"
//       value={newTodoName}
//       onChange={(e) => setNewTodoName(e.target.value)}
//     />
//     <button onClick={addNewTodo}>Add Todo</button>
//   </div>
// );
