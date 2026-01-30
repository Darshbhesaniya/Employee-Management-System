import React from 'react'
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask'
import AllTask from '../Other/AllTask'

const AdminDashBoard = (props) => {
    return (
        <div className='min-h-screen w-full p-7'>
            <Header changeuser={props.changeuser} />
           <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashBoard