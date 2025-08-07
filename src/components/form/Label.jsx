import React from 'react'

const Label = ({name,label,required}) => {
  return (
     <label htmlFor={name} className="block text-[15px] text-primary mb-[5px] tracking-[0.8px] font-roboto">
          {label} {required && <span className="text-secondary">*</span>}
     </label>
  )
}

export default Label
