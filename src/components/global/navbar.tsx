import Image from 'next/image'
import React from 'react'
import CustomLink from '../ui/link'

const Navbar = () => {
  return (
    <nav className='container mx-auto h-[100px] flex flex-row items-center justify-between'>
            <Image src="/logo.svg" alt='logo' width={150} height={150}/>
            <div className="flex gap-2">
                <CustomLink href="/founder/register" type="secondary" customStyles='text-center'>Start a campaign</CustomLink>
                <CustomLink href="/signin" customStyles='text-center'>Sign in</CustomLink>
            </div>
    </nav>
  )
}

export default Navbar