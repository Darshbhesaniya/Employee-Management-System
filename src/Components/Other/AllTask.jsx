import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'


const AllTask = () => {

    const [userData,setUserData] = useContext(AuthContext)
   
    return (
        <div className='bg-[#1c1c1c] rounded p-5 mt-5'>
                <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded pl-20'>
                    <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
                    <h3 className='text-lg font-medium w-1/5'>New Task</h3>
                    <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
                    <h5 className='text-lg font-medium w-1/5'>Completed</h5>
                    <h5 className='text-lg font-medium w-1/5'>Failed</h5>
                </div>
        
            <div className=''>
                {userData.map((elem, idx) => {
                    return <div key={idx} className='border-2 border-emerald-500  mb-2 pl-28 py-2 px-4 flex justify-between rounded '>
                        <h2 className='text-lg font-medium w-1/5 '>{elem.firstname}</h2>
                        <h3 className='text-lg font-medium w-1/5 text-blue-600'>{elem.taskCount.new}</h3>
                        <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskCount.active}</h5>
                        <h5 className='text-lg font-medium w-1/5 text-green-600'>{elem.taskCount.completed}</h5>
                        <h5 className='text-lg font-medium w-1/5 text-red-600'>0</h5>
                    </div>
                })}
            </div>


            {/* <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2>Sarthak</h2>
                <h3>Make a UI design</h3>
                <h5>Status</h5>
            </div>
            <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2>Sarthak</h2>
                <h3>Make a UI design</h3>
                <h5>Status</h5>
            </div>
            <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2>Sarthak</h2>
                <h3>Make a UI design</h3>
                <h5>Status</h5>
            </div> */}

        </div>
    )
}

export default AllTask