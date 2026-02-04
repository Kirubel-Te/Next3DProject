import React from 'react'
import Image from 'next/image'
import { Globe, Flag, Files } from 'lucide-react'

const page = () => {
  return (
    <section>
        <div className='mt-7 w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='flex justify-center'>
                <Image
                src="/hero-image 1.png"
                alt="About Us"
              className='w-full h-auto'
              width={800}
              height={300}
              sizes="100vw"
                />
            </div>
            <div className='flex flex-col justify-center'>
                <h3 className='mb-4 md:mb-7 uppercase text-xs sm:text-sm md:text-base tracking-wide'>About printforge</h3>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold montserrat-alternates-bold mb-4 md:mb-7'>Empowering makers worldwide</h1>
                <p className='mb-8 md:mb-12 text-base sm:text-lg md:text-xl font-light'>Founded in 2023, PrintForge has quickly become the go-to platform for 3D printing enthusiasts, makers, and professional designers to share and discover amazing STL files for 3D printing</p>
                <br/>
                <p className='text-base sm:text-lg md:text-2xl font-light'>Our mission is to foster a vibrant community where creativity meets technology, enabling anyone to bring their ideas to life through 3D printing</p>
            </div>
        </div>
        <br/>
        <hr className='font-extralight border-t border-gray-600/60'/>
        <div className='card-classes grid grid-cols-1 w-[80%] mx-auto md:grid-cols-3 mt-5'>
            <div className='py-6 md:px-6'>
                <div className='flex items-center gap-3 mb-3'>
                    <Files size={40} />
                    <span className='text-lg sm:text-xl md:text-xl font-bold'>100K+ Models</span>
                </div>
                <p className='text-sm sm:text-base md:text-lg'>Access our vast library of community-created 3D models, from practical tools to artistic creations.</p>
            </div>
            <div className='relative py-6 md:px-6 md:before:absolute md:before:left-0 md:before:top-1/2 md:before:-translate-y-1/2 md:before:h-26 md:before:w-px md:before:bg-gray-400'>
                <div className='flex items-center gap-3 mb-3'>
                    <Globe size={40} />
                    <span className='text-lg sm:text-xl md:text-xl font-bold'>Active Community</span>
                </div>
                <p className='text-sm sm:text-base md:text-lg'>Join thousands of makers who share tips, provide feedback, and collaborate on projects.</p>
            </div>
            <div className='relative py-6 md:px-6 md:before:absolute md:before:left-0 md:before:top-1/2 md:before:-translate-y-1/2 md:before:h-26 md:before:w-px md:before:bg-gray-400'>
                <div className='flex items-center gap-3 mb-3'>
                    <Flag size={40} />
                    <span className='text-lg sm:text-xl md:text-xl font-bold'>Free to use</span>
                </div>
                <p className='text-sm sm:text-base md:text-lg'>Most models are free to download, with optional premium features for power users.</p>
            </div>
        </div>
        <hr className='font-extralight border-t border-gray-600/60'/>
        <br/>
    </section>
    
  )
}

export default page
