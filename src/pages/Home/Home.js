import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Tasks from './Tasks';

const Home = () => {
    const { register, handleSubmit,reset } = useForm();
    const [reloadTask, setReloadTask]=useState(false)
    const onSubmit =async task => {
        task.isComplete=false;
        const {data} =await axios.post(`https://warm-inlet-18241.herokuapp.com/addtask`,task)
        reset();
        setReloadTask(!reloadTask)
    };
    return (
        <div className='text-center'>
            <h2 className='text-2xl my-4'>Add My Task</h2>
    

            <div className='flex justify-center'>
                <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-2'>
                    <input {...register("taskname")} type="text" placeholder="Task Name" className="input input-bordered w-screen max-w-lg" />
                    <textarea {...register("description")} className="textarea textarea-bordered" placeholder="Description"></textarea>
                    <button className="btn btn-secondary text-white">Add task</button>
                </form>
            </div>
            <div className="divider px-20">My Task</div>
            <Tasks reloadTask={reloadTask}></Tasks>
        </div>
    );
};

export default Home;