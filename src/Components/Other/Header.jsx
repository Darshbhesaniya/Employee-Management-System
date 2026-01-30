import React from 'react'

const Header = (props) => {
  // console.log(props.data);
  
    const userRole = JSON.parse(localStorage.getItem('loggedInUser'));
    console.log(userRole);
    
    if (userRole.role == 'admin') {
      console.log("YOu are a admin");
    }
    if (userRole.role == 'employee') {
      console.log("Hi , employee");
    }
   
    
    const logOutUser = ()=>{
      localStorage.setItem('loggedInUser','')
      // window.location.reload()    this is not use Because This is Reload the page
      // console.log(props.changeuser);
      props.changeuser('')
    }  

    
    

  return (
    <div className=' flex justify-between items-end'>
     
        <h2 className='text-2xl font-medium'>Hello, <br /> {userRole.role == 'admin'? <span className='text-3xl font-semibold'>Admin✋</span> : <span className='text-3xl font-semibold'>{userRole.data.firstname}✋</span>  } </h2>
        <button onClick={logOutUser} className='bg-red-500 px-5 py-2 rounded-sm text-white '>Log Out</button>
       
    </div>
  )
}

export default Header