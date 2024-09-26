export const List = ({ todo, setTodo }) => {
  return (
    <>
      <ul className="bg-white w-full">
        {todo.map((task) => (
          <li
            className="p-2 border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
            key={task.id}
          >
            {task.task}
          </li>
        ))}
      </ul>
    </>
  );
};
