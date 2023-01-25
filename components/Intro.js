import Image from 'next/image'
import React from 'react'
const Intro = () => {
    return (
        <section id='intro' className='relative h-screen'>
            <div className='m-3 p-3 rounded-md flex flex-col gap-y-4'>
                <div className='text-[#8bb82d] text-5xl text-center mitr'>
                    Hey, I&apos;m Bennett
                </div>
                <div className='text-center poppins text-xl'>
                    A full stack web developer based in Kochi, Kerala.
                </div>
            </div>
            <Image className='block absolute bottom-0  align-middle' alt='layers' height={130} width={800} src={'/layers1.svg'} />
        </section>
    )
}

export default Intro