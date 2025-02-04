
import React from 'react'
import { z } from "zod"
import { bayon } from '../../../../../../lib/fonts'
import { backerAccountTypes, countries } from '@/constants'
import Link from 'next/link'

import { SubmitHandler, useForm } from 'react-hook-form'

type FormFields = {
  firstNames: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  country: string;
  accountType: string;
  areasOfInterest: [string]
}


const InvestorSignUp = () => {

  const { register, handleSubmit } = useForm<FormFields>()

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data)
  }
  return (
    <div className="container mx-auto sm:px-5">
      <section className="py-16">
        

        <form className='w-[70%] mt-10 mx-auto space-y-4' onSubmit={handleSubmit(onSubmit)}>
          <h2 className={`${bayon.className} text-4xl`}>Personal information</h2>
          <input {...register("firstNames")} type="text" className='w-full h-[60px] outline-none border border-slate-300 bg-transparent rounded-md pl-4' name='firstNames' placeholder='First names*' autoComplete='false'/>
          <input {...register("lastName")} type="text" className='w-full h-[60px] outline-none border border-slate-300 bg-transparent rounded-md pl-4' name='lastName' placeholder='Last name*' autoComplete='false'/>
          <input {...register("email")} type="email" className='w-full h-[60px] outline-none border border-slate-300 bg-transparent rounded-md pl-4' name='email' placeholder='Email address*' autoComplete='false'/>
          <input {...register("password")} type="password" className='w-full h-[60px] outline-none border border-slate-300 bg-transparent rounded-md pl-4' name='password' placeholder='Password*' autoComplete='false'/>
          <input {...register("confirmPassword")} type="password" className='w-full h-[60px] outline-none border border-slate-300 bg-transparent rounded-md pl-4' name='confirmPassword' placeholder='Confirm password*' autoComplete='false'/>

          <select {...register("country")} name="country" className='w-full h-[60px] outline-none border border-slate-300 bg-transparent rounded-md pl-4' id="country">
            { countries.map((i) => (
              <option value={i.value} key={i.value} className='bg-background hover:cursor-pointer'>{i.name}</option>
            ))}
          </select>
          
          <h2 className={`${bayon.className} text-4xl mt-6`}>Account preferences</h2>
          <select {...register("accountType")} name="accountType" className='w-full h-[60px] outline-none border border-slate-300 bg-transparent rounded-md pl-4' id="accountType">
            { backerAccountTypes.map((k) => (
              <option value={k.value} key={k.value} className='bg-background'>{k.name}</option>
            ))}
          </select>
          
          <input {...register("areasOfInterest")} type="text" className='w-full h-[60px] outline-none border border-slate-300 bg-transparent rounded-md pl-4' name='areasOfInterest' placeholder='Areas of Interest' autoComplete='false'/>
          
          <div className='!mt-10 space-y-4'>
            <p className="text-slate-300 text-center">By signing up you agree to our <Link href="/termsofservice" className='text-green-600 underline text-lg'>terms of service</Link> and <Link href="/privacypolicy" className='text-green-600 underline'>Privacy policy.</Link></p>
            <button type="submit" className='outline-none border-none w-full h-[60px] text-center rounded-md bg-[#088C29] text-bold text-xl'>Sign up</button>
          </div>

        </form>
      </section>
      
    </div>
  )
}

export default InvestorSignUp