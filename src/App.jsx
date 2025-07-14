import { useEffect, useState } from "react";
import ProgressTracker from "./components/ProgressTracker";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import './Style.css'

export default function App() {
  // Load from localStorage initially
  const getInitialTasks = () => {
    const saved = localStorage.getItem("task-buddy-tasks");
    return saved ? JSON.parse(saved) : [];
  };

  
  const [tasks, setTasks] = useState(getInitialTasks);
  
  // const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("task-buddy-tasks", JSON.stringify(tasks))
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task])
  }

  const deleteTask = (index) => (
    setTasks(tasks.filter((_, i) => i != index))
  )

  const updateTask = (index, updatedTask) => {
    let newtask = [...tasks];
    newtask[index] = updatedTask
    setTasks(newtask);
  }

  const clearTasks = () => {
    setTasks([]);
  }
  
  return(
    <div className="App">
      <header>
        <h1 className="title">TaskBuddy</h1>
        <p className="tagline">Your Friendly Task Manager</p>
      </header>
      
      <TaskForm addTask = {addTask} />
      <TaskList 
      tasks = {tasks} 
      deleteTask = {deleteTask} 
      updateTask= {updateTask}/>
      <ProgressTracker tasks = {tasks} />

      {tasks.length > 0 && (
        <button className="clear-btn" onClick={clearTasks}>Clear All Tasks</button>
      )}
    </div>
  )
}