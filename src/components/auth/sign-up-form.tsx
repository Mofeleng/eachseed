"use client"

import React, { useState} from 'react'
import { bayon } from '../../../lib/fonts'
import Link from 'next/link'
import FormField from '../ui/form-field'
import { FormFieldProps, formSchema } from '@/libs/types'

const SignUpForm = () => {
    const [ formData, setFormData ] = useState({
        firstNames: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        country: "",
        accountType: "",
        areasOfInterest: [""]
    })

    const [ errors, setErrors ] = useState<Record<string,string>>({})

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault()

        const res = formSchema.safeParse(formData)

        if (!res.success) {
            const errorMessages: Record<string,string> = {}
            res.error.errors.forEach((err) => {
                if (err.path) errorMessages[err.path[0]] = err.message
            })
            setErrors(errorMessages)
        } else {
            setErrors({})
            console.log("Submitted", res.data)
        }
    }
  return (
    <form className='w-[70%] mt-10 mx-auto space-y-4' onSubmit={handleSubmit}>
        <h2 className={`${bayon.className} text-4xl`}>Personal information</h2>

        <FormField fieldType='TEXT' type='text' placeholder='First names' name='firstNames' value={formData.firstNames} onchange={handleChange} error={errors.firstNames} />
        <FormField fieldType='TEXT' type='text' placeholder='Last name' name='lastName' value={formData.lastName} onchange={handleChange} error={errors.lastName} />
        <FormField fieldType='TEXT' type='email' placeholder='Email' name='email' value={formData.email} onchange={handleChange} error={errors.email} />
        <FormField fieldType='TEXT' type='password' placeholder='Password' name='password' value={formData.password} onchange={handleChange} error={errors.password} />
        <FormField fieldType='TEXT' type='password' placeholder='Confirm password' name='confirmPassword' value={formData.confirmPassword} onchange={handleChange} error={errors.confirmPassword} />
        <FormField fieldType='SELECT' type='select' placeholder='Select country' name='country' value={formData.country} onchange={handleChange} error={errors.country} />

        <h2 className={`${bayon.className} text-4xl`}>Account preferences</h2>
        <FormField fieldType='SELECT' type='select' placeholder='Account type' name='accountType' value={formData.accountType} onchange={handleChange} error={errors.accountType} />
        <FormField fieldType='TEXT' type='text' placeholder='Areas of interest' name='areasOfInterest' value={formData.areasOfInterest} onchange={handleChange} error={errors.areasOfInterest} />

        <div className='!mt-10 space-y-4'>
            <p className="text-slate-300 text-center">By signing up you agree to our <Link href="/termsofservice" className='text-green-600 underline text-lg'>terms of service</Link> and <Link href="/privacypolicy" className='text-green-600 underline'>Privacy policy.</Link></p>
            <button type="submit" className='outline-none border-none w-full h-[60px] text-center rounded-md bg-[#088C29] text-bold text-xl'>Sign up</button>
        </div>
    </form>
  )
}

export default SignUpForm