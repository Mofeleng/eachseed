import React from 'react'
import { cn } from '../../../lib/utils'
import Link from 'next/link'
import { html } from 'framer-motion/client'

interface ButtonInfo {
  type?: string
  customStyles?: string
  href:string
  children: React.ReactNode
}

const CustomLink = ({ type, customStyles, href, children }: ButtonInfo) => {
  let style:string = ``

  switch(type) {
    case 'primary':
      style ="px-4 py-4 rounded-md bg-[#088C29] text-white min-w-[170px]"
      break

    case 'secondary':
      style = "px-4 py-4 rounded-md border border-slate-500 min-w-[170px]"
      break

    default:
    style ="px-4 py-4 rounded-md bg-[#088C29] text-white min-w-[170px]"
    break
    
  }

  return (
    <Link href={href} className={cn(style, customStyles)} >
        {children}
    </Link>
  )
}

export default CustomLink