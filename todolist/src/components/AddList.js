export default function AddList(props, onDelete) {
  return (
    <div>
      <h1>할 일 목록</h1>
      <ul>
        {props.todoList.map(item => (
          <li>
            {item}
            <button onClick={() => onDelete(props.todoList.id)}>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
