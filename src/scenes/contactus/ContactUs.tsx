import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import HText from '@/shared/HText'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

function ContactUs({setSelectedPage}: Props) {
    const inputStyles = `w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white mt-5`

    const {
        register,
        trigger,
        formState:{ errors }
    } = useForm()

    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if ( !isValid ){
            e.preventDefault()
        }
    }
    
    return (
        <section id = "contactus" className='mx-auto w-5/6 pt-24 pb-32'>
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
                {/* HEADER */}
                <motion.div className='md:w-3/5' initial='hidden' whileInView="visible" viewport={{once: true, amount: 0.5}} transition={{duration: 0.5}} variants={{hidden: {opacity:0, x:-50},visible: {opacity:1, x:0}}}>
                    <HText>
                        <span className='text-primary-500'>JOIN NOW</span> TO GET IN SHAPE
                    </HText>
                    <p className='my-5'>
                    Nullam ullamcorper, ligula quis vulputate fringilla, nunc ante dictum lorem, vel vulputate turpis nulla vel justo. Sed nisl urna, fringilla a quam non, sollicitudin dignissim neque. Ut suscipit massa est, sit amet euismod magna lobortis id. Praesent bibendum, erat vel dapibus elementum, sem quam suscipit felis, vel fermentum erat mi in velit. Cras sed ultrices libero. Nunc eu luctus nunc. Maecenas condimentum nisi nulla. Aliquam consequat vel tortor nec consequat. Mauris id dapibus enim, quis commodo neque.
                    </p>
                </motion.div>
                {/* FORM AND IMAGE */}
                <div className='mt-10 justify-between gap-8 md:flex'>
                    <motion.div
                        className='mt-10 basis-3/5 md:mt-0'
                        initial='hidden'
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                        transition={{duration: 0.5}}
                        variants={{hidden: {opacity:0, y:50},visible: {opacity:1, y:0}}}
                    >
                        <form
                            target="_blank"
                            onSubmit={onSubmit}
                            method='POST'
                            action='https://formsubmit.co/368d676b658c2d3cae2dfa06c50b3966'
                        >
                            <input
                                className={inputStyles}
                                type='text'
                                placeholder='NAME'
                                {...register("name", {required: true, maxLength:100})}
                            />
                            {errors.name && (
                                <p className='mt-1 text-primary-500'>
                                    {errors.name.type === 'required' && "This field is required."}
                                    {errors.name.type === 'maxLength' && "Max length is 100 chars."}
                                </p>
                            )}

                            <input
                                className={inputStyles}
                                type='text'
                                placeholder='EMAIL'
                                {...register("email", {required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})}
                            />
                            {errors.email && (
                                <p className='mt-1 text-primary-500'>
                                    {errors.email.type === 'required' && "This field is required."}
                                    {errors.email.type === 'pattern' && "Invalid email address."}
                                </p>
                            )}

                            <textarea
                                className={inputStyles}
                                rows={4}
                                cols={15}
                                placeholder='MESSAGE'
                                {...register("message", {required: true, maxLength:2000})}
                            />
                            {errors.message && (
                                <p className='mt-1 text-primary-500'>
                                    {errors.message.type === 'required' && "This field is required."}
                                    {errors.message.type === 'maxLength' && "Max length is 2000 char."}
                                </p>
                            )}

                            <button
                                type='submit'
                                className='mt-5 rounded-lg bg-secondary-500 px-200 py-3 transition duration-200 hover:text-white w-[150px]'
                            >
                                SUBMIT
                            </button>
                        </form>
                    </motion.div>
                    <motion.div
                        className='relative mt-16 basis-2/5 md:mt-0'
                        initial='hidden'
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                        transition={{delay: 0.2, duration: 0.5}}
                        variants={{hidden: {opacity:0, y:50},visible: {opacity:1, y:0}}}
                    >
                        <div className='before:absolute md:before:content-evolvetext w-full before:-bottom-20 before:-right-10 before:-z-10'>
                            <img src="/assets/ContactUsPageGraphic.png" alt="contactus-graphic" className='w-full mt-5'/>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default ContactUs