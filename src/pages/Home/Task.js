import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const Task = ({task,setcomplete,complete}) => {
    const {isComplete}=task

    const handleCompelte=async(task)=>{
        if(task.isComplete){return}
        task.isComplete=true;
        const {data}=axios.put(`https://warm-inlet-18241.herokuapp.com/complete?id=${task._id}`,task)
        setcomplete(!complete)
        
        if(!isComplete){
            toast('task complete')
        }
    }
    
    const handleDelete=id=>{
        const {data}=axios.delete(`https://warm-inlet-18241.herokuapp.com/taskdelete?id=${task._id}`)
        toast('successfully delete')
        setcomplete(!complete)
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
                <button onClick={()=>handleCompelte(task)} className="btn btn-primary mr-2">Complete</button>
                <button onClick={()=>handleDelete(task._id)} className="btn bg-red-500">Delete</button>
            </td>
        </tr>
    );
};

export default Task;