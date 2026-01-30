import React, { useContext } from 'react'
import { useState } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    // this usestate for give value  using Two-way binding
    const [tasktitle, setTaskTitle] = useState('')
    const [titleDescription, settitleDescription] = useState('')
    const [date, setDate] = useState('')
    const [assignto, setassignTo] = useState('')
    const [category, setCategory] = useState('')
   
    const [newTask, setNewTask] = useState({})

    const submitHandler = (e)=>{
        e.preventDefault()
       

        // console.log(tasktitle);
        // console.log(date);
        // console.log(assignto);
        // console.log(category);
        // console.log(titleDescription);
       

        setNewTask({tasktitle,titleDescription,date,assignto,category,active:false,new:true,completed:false,failed:false})
        console.log(newTask);
         
      const data = userData
      console.log(data);
      
        
        
      data.forEach(function(elem){
        if(assignto == elem.firstname){
            elem.tasks.push(newTask)
           elem.taskCount.newTask = elem.taskCount.newTask + 1
            // console.log(elem);
            
        }

      });
      setUserData(data)
      console.log(data);
      
        

        setTaskTitle('')
        setDate('')
        setassignTo('')
        setCategory('')
        settitleDescription('')
    }


  return (
    <div className='mt-10 bg-[#1c1c1c] p-5 rounded'>
                <form onSubmit={(e)=>{
                    submitHandler(e)
                }} action="" className=' flex flex-wrap w-full items-start justify-between'>
                    <div className='w-3/5'>
                        <div>
                            <h2>Task Title</h2>
                            <input value={tasktitle} onChange={(e)=>{
                               setTaskTitle(e.target.value)
                               
                            }} className='text-sm  px-2 w-4/5 outline-none bg-transparent border mb-4 rounded border-gray-400 py-1 mt-2 ' type="text" placeholder='Make a UI Design' />
                        </div>
                        <div>
                            <h2>Date</h2>
                            <input value={date}  onChange={(e)=>{  
                                setDate(e.target.value)
                            }} className='text-sm  px-2 w-4/5 outline-none bg-transparent border mb-4 rounded border-gray-400 py-1 mt-2  [&::-webkit-calendar-picker-indicator]:invert ' type="date" />
                        </div>
                        <div>
                            <h2>Assign To</h2>
                            <input value={assignto} onChange={(e)=>{
                                setassignTo(e.target.value)
                            }} className='text-sm  px-2 w-4/5 outline-none bg-transparent border mb-4 rounded border-gray-400 py-1 mt-2 ' type="text" placeholder='employee Name' />
                        </div>
                        <div>
                            <h2>Category</h2>
                            <input value={category} onChange={(e)=>{
                                setCategory(e.target.value);
                            }} className='text-sm  px-2 w-4/5 outline-none bg-transparent border mb-4 rounded border-gray-400 py-1 mt-2 ' type="text" placeholder='design, dev, etc' />
                        </div>
                    </div>

                    <div className='w-2/5 flex flex-col items-center'>
                        <h2 className='text-gray-300 mb-0.5'>Description</h2>
                        <textarea value={titleDescription} onChange={(e)=>{
                            settitleDescription(e.target.value)
                        }} name="" id="" className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400' ></textarea>
                        <button className='bg-emerald-500 py-3 rounded px-5 text-sm mt-4 w-full hover:bg-emerald-600 '>Create Task</button>
                    </div>


                </form>
            </div>

  )
}

export default CreateTask