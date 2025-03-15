import React from 'react'
import './Style.css'

const Footer = () => {
  return (
    <div className='py-4 custom-background'>
      <div className='w-3/4 mx-auto text-center'>
        <h1 className='mb-4'>Copyright &copy; 2025 All Rights Reserved</h1>
        <hr className='w-[33%] mx-auto' />
        <div className='mt-4'>
            <a href="https://www.linkedin.com/in/manish-kumar-srivastav/" target='_blank' rel="noopener noreferrer"><i class="fa-brands text-gray-300 hover:text-blue-600 duration-300 transition-all fa-linkedin text-xl"></i></a>
            <a href='https://www.instagram.com/srivastav_manish.02' target='_blank' rel="noopener noreferrer"><i class="fa-brands text-gray-300 hover:text-fuchsia-300 duration-300 transition-all fa-instagram text-xl"></i></a>
            <a href="https://github.com/Roxtop07" target='_blank' rel="noopener noreferrer"><i class="fa-brands text-gray-300 hover:text-blue-300 duration-300 transition-all fa-github text-xl"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
