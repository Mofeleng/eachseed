import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className='container mx-auto h-[100px] flex flex-row justify-between items-center sm:px-5'>
        <div>
            <Image src="/logo.svg" width={150} height={65} alt='Logo' />
        </div>
        <div className='flex flex-row gap-2'>
            <Link href="/" className='px-4 py-3 rounded-md border border-slate-400'>Start campaign</Link>
            <Link href="/" className='px-4 py-3 rounded-md bg-[#088C29] text-white'>Sign up</Link>
        </div>
    </nav>
  )
}

export default Navbar