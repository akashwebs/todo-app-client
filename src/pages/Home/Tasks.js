import React, { useEffect, useState } from 'react';
import Task from './Task';

const Tasks = ({reloadTask}) => {

    const [tasks, setTasks]=useState([])
    const [complete, setcomplete]=useState(true);
    useEffect(()=>{
        fetch('http://localhost:5000/todo')
        .then(res=>res.json())
        .then(data=>setTasks(data))
    },[complete,reloadTask])
    
    return (
        <div id='mytask' className='px-4 lg:px-20 my-12'>
           
            <div className="overflow-x-auto">
            <table className="table w-full">
                 
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