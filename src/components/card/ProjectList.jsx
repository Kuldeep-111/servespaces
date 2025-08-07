import React from 'react'
import Card from './Card'
import CardHeading from './CardHeading'

const ProjectList = ({data}) => {
  return (
    <Card>
      <CardHeading>Project List</CardHeading> 
      <h4 className='text-primary font-roboto py-[10px] mb-[10px] border-b border-[#45464f]'>Name</h4>
      <ul>
        {data.map((item,i)=>(
        <li key={i} className='text-[#eee] text-[12px] font-robotoLight tracking-[0.8px] leading-[26px] mb-[10px] pb-[10px] border-b border-[#45464f] '>{item}</li>
        ))}
      </ul>
    </Card>
  )
}

export default ProjectList
