import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios"
import Task from "./Task";
import TaskForm from "./TaskForm";

function TaskList() {
  const [formData,setFormData] = useState({name:"",completed:false})
  const {name} = formData
  
  const handleTaskChange = (e) =>{
    const {name,value } = e.target
    console.log(name,value)
    console.log(formData)
    setFormData({...formData,[name]:value})
  }

  const createTask = async (e) => {
    e.preventDefault()
    if(name === ""){
      toast.error("Input Field Cannot be Empty")
    }
    try {
      await axios.post("http://localhost:5000/api/tasks",formData)
      toast.success("Task Created Success Fully")
      setFormData({...formData,name:""})
     
    } catch (error) {
      toast.error(error.message)
      console.log(error)
    }
  }
  return (
    <div>
      <h1>Task Manager App</h1>
      <TaskForm name={name} handleTaskChange={handleTaskChange} createTask={createTask}/>
      <div className="divider">
        <p>
          Total Tasks : <b>0</b>
        </p>
        <p>
          Completed Tasks : <b>0</b>
        </p>
      </div>
      <br/>
      <hr></hr>
      <br/>
      <Task />
    </div>
  );
}

export default TaskList;
