"use server"

import React from 'react'
import { z } from "zod"
import { bayon } from '../../../../../../lib/fonts'
import CustomHeading from '@/components/heading'

const InvestorRegistrationSchema = z.object({
    firstNames: z.string().min(2, { message: "Your name must be at least 2 charecters"}),
    lastName: z.string().min(2, { message: "Your last name must be at least 2 charecters"}),
    email: z.string().email({ message: "Please enter a valid email address"}),
    password: z.string().min(8, {message: "Password must be at least 8 charecters"}),
    country: z.string().min(2, { message: "Country must be at least 2 charecters"}),
    accountType: z.string(),
    AreasOfInterest: z.array(z.string()),

})

const InvestorSignUp = async () => {

     
  return (
    <div className="container mx-auto sm:px-5">
      <section className="py-16">
        <div className="text-center">
          <CustomHeading heading='Your future in a sustainable world begins here' paragraph='Sign up to get access to projects that will shape our future'/>
        </div>

        <div className='w-[70%] mt-10 mx-auto space-y-4'>
          <h2 className={`${bayon.className} text-4xl`}>Personal information</h2>
          <input type="text" className='w-full h-[60px] outline-none border border-slate-300 bg-transparent  rounded-md' name='firstNames' placeholder='First names*' autoComplete='false'/>
          <input type="text" className='w-full h-[60px] outline-none border border-slate-300 bg-transparent  rounded-md' name='lastName' placeholder='Last name*' autoComplete='false'/>
          <input type="email" className='w-full h-[60px] outline-none border border-slate-300 bg-transparent  rounded-md' name='email' placeholder='Email address*' autoComplete='false'/>
          <input type="password" className='w-full h-[60px] outline-none border border-slate-300 bg-transparent  rounded-md' name='password' placeholder='Password*' autoComplete='false'/>
          <input type="password" className='w-full h-[60px] outline-none border border-slate-300 bg-transparent  rounded-md' name='confirmPassword' placeholder='Confirm password*' autoComplete='false'/>
          <select name="country" className='w-full h-[60px] outline-none border border-slate-300 bg-transparent  rounded-md' id="country">
            <option value="ZA" className="bg-black cursor-pointer">South Africa</option>
            <option value="USA" className='bg-black '>United States of America</option>
          </select>
        </div>
      </section>
      
    </div>
  )
}

export default InvestorSignUp