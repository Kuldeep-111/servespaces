import React from 'react'

const TableRow = ({children,i}) => {
  return (
    <tr key={i}>
      {children}
    </tr>
  )
}

export default TableRow
