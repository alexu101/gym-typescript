import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const childVariants = {
  hidden: {opacity:0, scale:0.9},
  visible: {opacity:1, scale: 1}
}

type Props = {
  icon: React.ReactNode,
  title: string,
  description: string,
  setSelectedPage: (value: SelectedPage) => void
}

function Benefit({icon, title, description, setSelectedPage}: Props) {
  return (
    <motion.div className='m-5 rounded-md border-2 border-gray-100 px-5 py-16 ' variants={childVariants}>
      <div className='mb-4 flex flex-col justify-center items-center'>
          <div className='rounded-full border-2 border-gray-100 bg-primary-100 p-4 w-fit'>
            {icon}
          </div>
          <h4 className='p-4 font-bold'>
            {title}
          </h4>
          <p className='text-center'>
            {description}
          </p>
          <AnchorLink className='text-red-400 hover:text-red-300 underline' onClick={()=>{setSelectedPage(SelectedPage.ContactUs)}} href={`#${SelectedPage.ContactUs}`}>
            <p>Learn More</p>
          </AnchorLink>
      </div>
    </motion.div> 
  )
}

export default Benefit