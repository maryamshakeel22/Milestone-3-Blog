import Link from 'next/link';
import React from 'react'

const Hero = () => {
  return (
     <div>
    <main className="flex-1">
        {/* Hero section with background image */}
        <section
          className="relative h-[600px] bg-cover bg-center"
          style={{ backgroundImage: "url('/bgbg.avif')" }}
        >
          <div className="container h-full flex items-center justify-center sm:justify-center px-4">
            {/* Content container, adjusts on small screens */}
            <div className="relative z-10 max-w-[543px] bg-[#FFF9F3] p-8 sm:right-[40px] md:right-[40px]">
              <p className="text-sm uppercase tracking-wide mb-2">My Blog</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#B88E2F] mb-4">
              Showcasing Creativity 
                <br />
                and Innovation
              </h1>
              <p className="text-gray-600 mb-8">
              Welcome to my blog, where I share my journey as a frontend developer.
              Explore my projects, learnings, and experiences as I build captivating
               web applications with modern technologies.
              </p>
              <Link href={'#blog'}>
          <button
            className={`inline-flex text-white  border-0 py-3 px-8 focus:outline-none bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-purple-500 rounded-lg shadow-md transition duration-300 w-full sm:w-auto`}
          >
            Check it Here
          </button>
        </Link> 
            </div>
          </div>
        </section>
      </main>
      </div>
    // </div>
  );
}


export default Hero