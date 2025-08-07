import React from 'react'

const TableHeading = ({key,children}) => {
  return (
    <th
  key={key}
  className="text-[14px] text-primary border-b-0 font-roboto tracking-[1px] py-[10px]"
>
  {children}
</th>

  )
}

export default TableHeading
