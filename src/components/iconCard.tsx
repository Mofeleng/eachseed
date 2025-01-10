import React from 'react'
import Image from 'next/image';

import { Bayon } from '@next/font/google';
const bayon = Bayon({ weight: "400", subsets: ["latin"]})

const IconCard = ({ icon, title, description } : {
    icon: string
    title: string,
    description: string
} ) => {
  return (
    <div className="flex flex-col gap-6 items-center px-8 py-10 shadow-sm shadow-gray-900 " key={title}>
        <Image src={icon} width={64} height={64} alt="icon" />
        <div className="flex flex-col gap-3">
          <h2 className={`${bayon.className} text-3xl`}>{ title} </h2>
          <p>
          { description }
          </p>
        </div>
        
    </div>
  )
}

export default IconCard