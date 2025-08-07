import React from 'react'

const Pagination = () => {
  return (
    <ul className='flex justify-end items-center mt-[20px]'>
        <li className='text-[14px] bg-transparent border border-[#45464f] border-r-0 rounded-tl-[4px] rounded-bl-[4px] text-white px-[10px] py-[5px]'><button>Prev</button></li>
        <li className='text-[14px] bg-transparent border border-[#45464f] text-white px-[10px] py-[5px]'>Page 1 of 2</li>
        <li className='text-[14px] bg-transparent border border-[#45464f] border-l-0 rounded-tr-[4px] rounded-br-[4px] text-white px-[10px] py-[5px]'><button>Next</button></li>
    </ul>
  )
}

export default Pagination
