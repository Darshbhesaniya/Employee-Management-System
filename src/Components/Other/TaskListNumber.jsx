import React from 'react'

const TaskListNumber = ({data}) => {
  // console.log(data);
  
  return (
    <div className='flex justify-between gap-5 screen mt-10'>
        <div className='rounded-xl p-10 w-[45%] bg-[#2563EB]'>
          <h2 className='text-3xl font-semibold'>{data.taskCount.new}</h2>
          <h3 className='text-xl font-medium'>New Task</h3>
        </div>
         <div className='rounded-xl p-10 w-[45%] bg-[#16A34A]'>
          <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
          <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
         <div className='rounded-xl p-10 w-[45%] bg-[#7C3AED]'>
          <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
          <h3 className='text-xl font-medium'>Accept Task</h3>
        </div>
         <div className='rounded-xl p-10 w-[45%] bg-[#DC2626]'>
          <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
          <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>

    </div>
  )
}

export default TaskListNumber