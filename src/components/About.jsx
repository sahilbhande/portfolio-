import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full '>
            <div className='max-w-[1000px] w-full  grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4 '>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>About</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right  text-4xl font-bold '>
                        <p>Hi. I'm Sahil, nice to meet you. please take a look around</p>
                    </div>
                    <div>
                        <p>Driven by a passion for crafting exceptional software, I focus on creating solutions that genuinely improve the lives of individuals and the operations of small businesses. I specialize in understanding the unique needs of my clients and developing custom software to meet those requirements. Imagine having a dedicated software developer ready to bring your ideas to life – what challenges could we solve or opportunities could we unlock for you?</p>
                    </div>
                </div>
            </div>

        </div>
    
  )
}

export default About