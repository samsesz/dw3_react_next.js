const TaskList = ({ tasks }) => {
  // retorno condicional
  if (tasks.length === 0) {
    return <p>Não há tarefas para mostrar</p>;
  }

  return (
    <>
      <div>
        <h4>Lista de tarefas</h4>
        <ol>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.id} - {task.text}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};
export default TaskList;
