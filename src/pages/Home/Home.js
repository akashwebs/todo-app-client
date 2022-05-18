import React from 'react';
import Tasks from './Tasks';

const Home = () => {
    return (
        <div className='text-center'>
            <h2 className='text-2xl'>this is home</h2>


            <div className='flex justify-center'>
                <form className='grid grid-cols-1 gap-2'>
                    <input type="text" placeholder="Task Name" class="input input-bordered w-screen max-w-lg" />
                    <textarea class="textarea textarea-bordered" placeholder="Description"></textarea>
                    <button class="btn btn-secondary text-white">Add task</button>
                </form>
            </div>
            <div class="divider px-20">My Task</div>
            <Tasks></Tasks>
        </div>
    );
};

export default Home;