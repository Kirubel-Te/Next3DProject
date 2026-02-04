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
                <h3 className='mb-7 uppercase'>About printforge</h3>
                <h1 className='text-5xl font-bold montserrat-alternates-bold mb-7'>Empowering makers worldwide</h1>
                <p className='mb-12 text-2xl font-light'>Founded in 2023, PrintForge has quickly become the go-to platform for 3D printing enthusiasts, makers, and professional designers to share and discover amazing STL files for 3D printing</p>
                <br/>
                <p className='text-2xl font-light'>Our mission is to foster a vibrant community where creativity meets technology, enabling anyone to bring their ideas to life through 3D printing</p>
            </div>
        </div>
        <br/>
        <hr/>
        <div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </section>
    
  )
}

export default page
