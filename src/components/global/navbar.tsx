import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='container mx-auto h-[100px] flex flex-row items-center justify-between'>
            <Image src="/logo.svg" alt='logo' width={150} height={150}/>
            <div className="flex gap-2">
                <Link href="/" className='px-3 py-3 border border-slate-500 rounded-md min-w-[150px] text-center'>Start a campaign</Link>
                <Link href="/" className='px-3 py-3 bg-[#088C29] text-white rounded-md  min-w-[150px] text-center'>Sign in</Link>
            </div>
    </nav>
  )
}

export default Navbar