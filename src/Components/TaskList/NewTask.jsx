import React from 'react'

const NewTask = ({ data }) => {
  console.log(data);


  return (
    <div className='h-full shrink-0 w-[370px] bg-[#A16207] rounded-xl p-5'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-500 text-lg py-1 px-3 rounded'>{data.category}</h3>
        <h4 className='text-base font-medium'>{data.date}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>{data.tasktitle}</h2>
      <p className='text-sm mt-2'>{data.titleDescription}</p>
      <div className='mt-6'>
        <button className='bg-blue-500 rounded font-medium py-1 px-2 text-xs'>Accept Task</button>
      </div>
    </div>
  )
}

export default NewTask