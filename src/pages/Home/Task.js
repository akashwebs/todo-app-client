import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const Task = ({task,setcomplete,complete}) => {
    const {isComplete}=task
    const handleCompelte=async(task)=>{

        task.isComplete=true;
        const {data}=axios.put(`http://localhost:5000/complete?id=${task._id}`,task)
        setcomplete(!complete)

        if(!isComplete){
            toast('task complete')
        }
    }
    
    
    return (
        <tr className='text-center'>

            <td 
            style={{
                textDecoration: isComplete ? 'line-through' : 'none'
              }}
            >{task.taskname}</td>
            <td>{task.description}</td>
            <td>
                <button onClick={()=>handleCompelte(task)} class="btn btn-primary mr-2">Complete</button>
                <button class="btn bg-red-500">Delete</button>
            </td>
        </tr>
    );
};

export default Task;