import React, { useEffect, useState } from 'react';

const Tasks = () => {

    const [tasks, setTasks]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/todo')
    },[])
    
    return (
        <div className='px-4 lg:px-20 my-12'>
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
                       
                        <tr className='text-center'>
                            
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>
                            <button class="btn btn-primary mr-2">Complete</button>
                            <button class="btn bg-red-500">Delete</button>
                            </td>
                        </tr>
                        
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Tasks;