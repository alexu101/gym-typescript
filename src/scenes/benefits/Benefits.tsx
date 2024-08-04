import {SelectedPage} from '@/shared/types'
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid'
import {motion} from "framer-motion"
import HText from '@/shared/HText'
import { BenefitType } from '@/shared/types'
import Benefit from './Benefit'
import ActionButton from '@/shared/ActionButton'

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className='h-6 w-6'/>,
    title: "State of the Art Facilities",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum quam sit amet feugiat eleifend. Proin pretium ex urna. Sed vitae ultrices ante, et eleifend leo."
  },
  {
    icon: <UserGroupIcon className='h-6 w-6'/>,
    title: "100's of Divers Classes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum quam sit amet feugiat eleifend. Proin pretium ex urna. Sed vitae ultrices ante, et eleifend leo."  
  },
  {
    icon: <AcademicCapIcon className='h-6 w-6'/>,
    title: "Expert and Pro Trainers",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum quam sit amet feugiat eleifend. Proin pretium ex urna. Sed vitae ultrices ante, et eleifend leo."  
  }
]

const container = {
  hidden: {},
  visible: {
    transition: {staggerChildren: 0.2}
  }
}

type Props = { setSelectedPage: (value: SelectedPage) => void}

function Benefits({setSelectedPage}: Props) {
  return (
    <section
      id='benefits'
      className='mx-auto min-h-full w-5/6 py-20 flex items-center'
    >
      <motion.div
        onViewportEnter={() =>{setSelectedPage(SelectedPage.Benefits)}}
        className='flex flex-col items-center justify-center'
      >
        {/* HEADER */}
        <div className='md:my-5 md:w-3/5 flex-col text-center'>
          <HText children={"MORE THAN JUST A GYM."}/>
          {/* !!!ITS THE SAME WITH
          <HText>
            MORE THAN JUST A GYM
          </HText> */}
          <p className='my-5 text-sm'>
            We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member
          </p>
        </div>

        {/* BENEFITS */}
        <motion.div
          className='md:flex items-center justify-between gap:8 mt-5'
          initial='hidden'
          whileInView='visible'
          viewport={{once: true, amount: 0.5}}
          variants={container}
        >
            {benefits.map((benefit: BenefitType)=>(
              <Benefit
                key={benefit.title}
                icon = {benefit.icon}
                title = {benefit.title}
                description = {benefit.description}
                setSelectedPage={setSelectedPage}
              />
            ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
          {/* GRAPHIC */}
          <img 
            className='mx-auto'
            alt='benefits-page-graphic'
            src="/assets/BenefitsPageGraphic.png"
          />
          {/* DESCRIPTION */}
          <div>
            <div className='relative'>
              <div className='before:absolute before:-top-20 before:-left-20 before:z[-1] before:content-abstractwaves'>
                <div>
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className='text-primary-500'>FIT</span>
                  </HText>
                </div>
              </div>
            </div>
            <div>
              <p className='my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu lobortis diam. Praesent eget odio elit. Phasellus venenatis, sapien sed porta tincidunt, velit eros dapibus nibh, sit amet hendrerit tortor mi in nulla. Integer eget rutrum metus. Duis venenatis, lectus vel rhoncus molestie, nisl odio dapibus quam, eget convallis nisl tellus nec urna. Mauris vehicula orci sit amet velit iaculis, eu laoreet nisi vulputate. Curabitur sit amet eleifend leo.</p>
              <p className='mb-5'>Integer facilisis pulvinar orci, sed iaculis ex condimentum ac. Nullam eget ligula ac augue placerat viverra. Integer mattis felis id neque finibus, id pretium lacus fermentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Aliquam at enim consectetur, pulvinar orci ac, malesuada nisl. Donec interdum tempus mauris rutrum malesuada. Duis nec nunc a ligula consequat congue. Aliquam luctus tristique enim ut ullamcorper. Morbi ipsum odio, blandit nec ligula vel, laoreet dictum purus.</p>
            </div>
            <div className='relative mt-16'>
              <div className='before:absolute before:-bottom-20 before:right-40 before:z[-1] before:content-sparkles'>
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>  
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits