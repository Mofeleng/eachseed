import { backerAccountTypes, countries } from '@/constants'
import { FormFieldProps } from '@/libs/types'
import React from 'react'

const FormField: React.FC<FormFieldProps> = ({
    type,
    name,
    placeholder,
    value,
    onchange,
    error,
    fieldType
}) => {

    let optionOutput: React.ReactNode 

    switch (name) {
        case 'country':
            optionOutput = <>
                { countries.map((i) => (
                    <option value={i.value} key={i.value} className='bg-background hover:cursor-pointer'>{i.name}</option>
                ))}
            </>

        case 'accountTypes':
            optionOutput = <>
                { backerAccountTypes.map((k) => (
                    <option value={k.value} key={k.value} className='bg-background'>{k.name}</option>
                ))}
            </>
    }

    switch (fieldType) {
        case 'TEXT':
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
        case 'SELECT':
            return (
                <>
                <select name={name}
                    className='w-full h-[60px] outline-none border border-slate-300 bg-transparent rounded-md pl-4'
                    id={name}
                    value={value}
                    onChange={onchange}
                    aria-placeholder={placeholder}
                >
                   { optionOutput }
                </select>
                </>
            )
    }
    
  
}

export default FormField