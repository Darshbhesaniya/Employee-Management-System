import React from 'react'
import Header from '../Other/Header'
import TaskListNumber from '../Other/TaskListNumber'
import TaskList from '../TaskList/TaskList'


const EmployeeDashBoard = (props) => {


  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
  
        <Header changeuser={props.changeuser} data={props.data} />
       <TaskListNumber data={props.data} />
       <TaskList data={props.data} />
    </div>
  )
}

export default EmployeeDashBoard