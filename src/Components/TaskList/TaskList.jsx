import React from 'react'
import AcceptTask from './AcceptTask';
import CompleteTask from './CompleteTask';
import NewTask from './NewTask';
import FailedTask from './FailedTask';

const TaskList = ({data}) => {
    // console.log(data);
    

    return (
        <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center gap-5 justify-start w-full mt-10'>
           
            {data.tasks.map((elem,idx)=>{

                if (elem.active) {
                    return <AcceptTask key={idx} data={elem} />
                }
                if(elem.new){
                    return <NewTask key={idx} data={elem}/>
                }
                if(elem.completed){
                    return <CompleteTask key={idx} data={elem}/>
                }
                if(elem.failed){
                    return <FailedTask key={idx} data={elem}/>
                }
            })}
           
         

        </div>
    )
}

export default TaskList