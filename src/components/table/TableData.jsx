import React from 'react'

const TableData = ({key,children}) => {
  return (
    <td key={key} className="text-[#eee] font-robotoLight tracking-[1px] p-[10px]  text-[14px] text-center">
      {children}
    </td>
  )
}

export default TableData
