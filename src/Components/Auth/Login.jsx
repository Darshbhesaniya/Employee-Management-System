import React from 'react'
import { useState } from 'react'

const Login = ({ handleLogin }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false)

    function submitHandler(e) {
        e.preventDefault();
        console.log('Email is ', email);
        console.log('password is ', password);
        // This is authenticationdata data send to app.jsx 
        handleLogin(email, password);
        setEmail('')
        setPassword('')
    }





    return (
        <div className='flex h-screen w-screen  justify-center items-center'>
            <div className='border-2 rounded-xl bg-[#1C1C2D] border-[#4A2E3C] p-20'>
                <div className='flex flex-col gap-30'>
                    <h1 className='text-3xl font-bold pl-1'>Log In</h1>

                    <form onSubmit={(e) => {
                        submitHandler(e)
                    }} className='flex flex-col justify-center items-center gap-10' action="">

                        <input value={email} onChange={(e) => {
                            setEmail(e.target.value)
                        }} required type="email" placeholder='Enter Your Email' className='bg-transparent outline-none border-2 border-[#4A2E3C] font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-300' />

                        <div className='flex flex-col relative justify-between'>

                            <input type={show ? "text" : "password"} value={password} onChange={(e) => {
                                setPassword(e.target.value)
                            }} required placeholder='Enter Password' className='bg-transparent outline-none border-2  border-[#4A2E3C]  font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-300' />

                            <span onClick={() => {
                                setShow(!show)
                            }} className='absolute left-50 top-3 text-sm text-white font-semibold'>Show
                            </span>

                        </div>

                        <button className='mt-7 text-white border-none outline-none text-lg font-semibold bg-[#F0445C] py-2 px-8 w-full rounded'>Log In</button>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default Login