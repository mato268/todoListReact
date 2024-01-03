import "./App.css";
import { useState } from "react";
import AddList from "./components/AddList";

function App() {
  const [input, setinput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const onSubmit = e => {
    e.preventDefault();
    if (!input) {
      alert("다시 입력하세요.");
      return;
    }
    setTodoList([...todoList, input]);
    setinput("");
  };

  const onDelete = id => {
    setTodoList(todoList.filter(todoItem => todoItem.id !== id));
  };

  return (
    <main className="main">
      <form onSubmit={onSubmit}>
        <input
          value={input}
          type="text"
          onChange={e => setinput(e.target.value)}
          placeholder="할 일 입력"
        />
        <input type="submit" value="추가" />
      </form>
      <AddList todoList={todoList} onDelete={onDelete}/>
    </main>
  );
}

export default App;
