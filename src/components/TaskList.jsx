export default function TaskList({tasks, deleteTask, updateTask}) {

    const toggleTask = (index) => {
        const updatedTask = {...tasks[index], completed: !tasks[index].completed};
        updateTask(index, updatedTask);
    };
    
    return(
        <ul className="task-list">
            {tasks.map((task, index) => (
                 <li key={index} className= {task.completed ? 'completed': ''}>

                   <div>
                    <span className={`task-text ${task.completed ? "completed" : ""}`}>
                    {`Task ${index + 1} (${task.priority}, ${task.category})`}
                    </span>
                   </div>


                    <div className="task-actions">
                        <button onClick={() => toggleTask(index)}>
                            {task.completed ? 'Undo' : 'Complete'}
                        </button>
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </div>
                </li>
            ))}
           
        </ul>
    
    );
}
