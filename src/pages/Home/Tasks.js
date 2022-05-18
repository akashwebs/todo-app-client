import React, { useEffect, useState } from 'react';
import Task from './Task';

const Tasks = () => {

    const [tasks, setTasks]=useState([])
    const [complete, setcomplete]=useState(true);
    useEffect(()=>{
        fetch('http://localhost:5000/todo')
        .then(res=>res.json())
        .then(data=>setTasks(data))
    },[complete])
    
    return (
        <div className='px-4 lg:px-20 my-12'>
            {tasks.length}
            <div class="overflow-x-auto">
            <table class="table w-full">
                 
                    <thead>
                        <tr className='text-center'>
                            <th>Task Name</th>
                            <th>Description</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                       {
                           tasks.map(task=><Task 
                            key={task._id}
                            task={task}
                            setcomplete={setcomplete}
                            complete={complete}
                            ></Task>)
                       }
                        
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Tasks;