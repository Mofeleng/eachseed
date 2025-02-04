import { FormFieldProps } from '@/libs/types'
import React from 'react'

const FormField: React.FC<FormFieldProps> = ({
    type,
    name,
    placeholder,
    value,
    onchange,
    error
}) => {
  return (
    <>
        <input type={type}
            name={name}
            className='w-full h-[60px] outline-none border border-slate-300 bg-transparent rounded-md pl-4'
            placeholder={placeholder}
            value={value}
            onChange={onchange}
            autoComplete='false'
        />
        { error && <span className='text-red-500'>{error}</span>}
    </>
  )
}

export default FormField