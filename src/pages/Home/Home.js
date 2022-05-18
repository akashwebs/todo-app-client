import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Tasks from './Tasks';

const Home = () => {
    const { register, handleSubmit,reset } = useForm();

    const onSubmit =async task => {
        task.isComplete=false;
        const {data} =await axios.post(`http://localhost:5000/addtask`,task)
        reset();
    };
    return (
        <div className='text-center'>
            <h2 className='text-2xl'>this is home</h2>
    

            <div className='flex justify-center'>
                <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-2'>
                    <input {...register("taskname")} type="text" placeholder="Task Name" class="input input-bordered w-screen max-w-lg" />
                    <textarea {...register("description")} class="textarea textarea-bordered" placeholder="Description"></textarea>
                    <button class="btn btn-secondary text-white">Add task</button>
                </form>
            </div>
            <div class="divider px-20">My Task</div>
            <Tasks></Tasks>
        </div>
    );
};

export default Home;