import React from 'react'
import { bayon } from '../../../lib/fonts'
import Link from 'next/link'

const SignUpForm = () => {
  return (
    <form className='w-[70%] mt-10 mx-auto space-y-4'>
        <h2 className={`${bayon.className} text-4xl`}>Personal information</h2>


        <div className='!mt-10 space-y-4'>
            <p className="text-slate-300 text-center">By signing up you agree to our <Link href="/termsofservice" className='text-green-600 underline text-lg'>terms of service</Link> and <Link href="/privacypolicy" className='text-green-600 underline'>Privacy policy.</Link></p>
            <button type="submit" className='outline-none border-none w-full h-[60px] text-center rounded-md bg-[#088C29] text-bold text-xl'>Sign up</button>
        </div>
    </form>
  )
}

export default SignUpForm