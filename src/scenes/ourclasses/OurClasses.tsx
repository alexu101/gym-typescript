import { SelectedPage, ClassType } from '@/shared/types'
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import OurClass from './OurClass'

const ourClasses: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: "Nunc convallis quis nisl a varius. Donec id justo elit. Curabitur porta viverra lectus, in eleifend justo dictum in",
        image: "assets/image1.png"
    },
    {
        name: "Sport Classes",
        image: "assets/image2.png"
    },
    {
        name: "Yoga Classes",
        image: "assets/image3.png"
    },
    {
        name: "Ab Core Classes",
        description: "Nunc convallis quis nisl a varius. Donec id justo elit. Curabitur porta viverra lectus, in eleifend justo dictum in",
        image: "assets/image4.png"
    },
    {
        name: "Adventure Classes",
        description: "Nunc convallis quis nisl a varius. Donec id justo elit. Curabitur porta viverra lectus, in eleifend justo dictum in",
        image: "assets/image5.png"
    },
    {
        name: "Training Classes",
        description: "Nunc convallis quis nisl a varius. Donec id justo elit. Curabitur porta viverra lectus, in eleifend justo dictum in",
        image: "assets/image6.png"
    },
]

type Props = {
    setSelectedPage: (vlue: SelectedPage) => void
}

function OurClasses({setSelectedPage}: Props) {
  return (
    <section id='ourclasses' className='w-full bg-primary-100 py-40'>
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div className='mx-auto w-5/6 '
                initial='hidden'
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 0.5}}
                variants={{
                hidden: {opacity:0, x:-50},
                visible: {opacity:1, x:0}}}
            > 
                <div className='md:w-3/5'>
                    <HText>
                        OUR CLASSES
                    </HText>
                    <p className='py-5'>
                        Nunc convallis quis nisl a varius. Donec id justo elit. Curabitur porta viverra lectus, in eleifend justo dictum in. In vehicula tincidunt dapibus. Nam sed accumsan orci, a volutpat odio. Nam sit amet dignissim risus. Vivamus eget nibh at urna pretium venenatis at non libero.
                    </p>
                </div>
            </motion.div>
            <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
                <ul className='w-[2800px] whitespace-nowrap'>
                    {
                        ourClasses.map((item:ClassType, index)=>(
                            <OurClass
                                key={index}
                                name={item.name}
                                description={item.description}
                                image={item.image}
                            />
                        ))
                    }
                </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default OurClasses