import React from 'react'

import { Bayon } from '@next/font/google'
const bayon = Bayon({ weight: "400", subsets: ["latin"]})

const CustomHeading = ({ heading, paragraph }: {heading: string, paragraph: string}) => {
  return (
    <>
        <h1 className={`${bayon.className} text-8xl`}>{heading}</h1>
        <p className='mt-4 text-xl'>{ paragraph }</p>
    </>
  )
}

export default CustomHeading