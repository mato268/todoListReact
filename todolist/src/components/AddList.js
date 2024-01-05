export default function AddList({ todoList, onDelete, onToggle }) {
  return (
    <div>
      <h1>할 일 목록</h1>
      <ul>
        {todoList.map(item => (
          <li
            className={`${item.checked ? "checked" : ""}`}
            onClick={() => onToggle(item.id)}
            key={item.id}
          >
            {item.text}
            <button onClick={() => onDelete(item.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
