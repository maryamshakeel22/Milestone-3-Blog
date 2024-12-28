'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Typewriter from "typewriter-effect";
import CommentSection from '@/app/components/CommentSection';


interface Post {  
  bgColor: string;
  border:string;
  title: string;
  date: string;
  content: string;
  imageUrl: string;
  projectLink: string;
  bg_btn :string;
  bg_hover: string
}

export default function PostDetail({ params }: { params: { id: string } }) {
  const { id } = params;

  const getPostById = (id: string) => {
    const posts: Post[] = [
        {
        title: '1. Coffee Website ☕',
        date: 'Nov 17, 2024',
        content: "This coffee website ☕✨ is a perfect blend of aesthetics and functionality, created using HTML, CSS, and Tailwind CSS. It features a user-friendly interface that highlights various coffee products 🛍, brewing methods 🍵, and related services 🏪. The website uses a responsive design 📱💻 to ensure optimal viewing across devices, making it accessible to coffee lovers anywhere 🌍. With Tailwind is utility-first classes, the website is not only visually appealing but also optimized for performance ⚡ and easy customization 🔧. Whether you are a coffee enthusiast or a business offering coffee products, this website provides an engaging platform to present your offerings in style.",
        imageUrl: '/coffee.png',
        projectLink: 'https://coffee-website-tau-ruby.vercel.app/',
        bgColor: 'bg-gray-800',
        border: 'border-green-900',
        bg_btn: 'bg-blue-500',
        bg_hover: 'hover:bg-blue-600',
       },
      {
        title: '2 Generate Your Professional Resume in Minutes 🕒',
        date: 'Nov 17, 2024',
        content: ' This Resume Generator website allows you to create a custom resume tailored to your needs ✍. With a variety of modern templates 🖥, you can quickly add your personal details, work experience, educational background 🎓, and skills 🛠. Designed to be simple and user-friendly, the platform ensures that your resume is polished and professional 📄. Whether you are applying for your first job or advancing in your career, this tool helps you present your qualifications in the best possible way 🌍. Start building your perfect resume today and impress potential employers! ',
        imageUrl: '/resume-web.PNG',
        projectLink: 'https://resume-website-pi-seven.vercel.app/',
        bgColor: 'bg-gray-800',
        border: 'border-green-900',
        bg_btn: 'bg-blue-500',
        bg_hover: 'hover:bg-blue-600',
      },
      {
        title: '3 Manage Your Tasks Efficiently ✅',
        date: 'Nov 17, 2024',
        content: ' This To-Do List website is designed to help you manage tasks effortlessly. With an easy-to-use interface, you can add, edit, and remove tasks as you go. It’s perfect for staying organized and productive, whether you’re handling work, school, or personal tasks. Built with HTML, CSS, and JavaScript, this website is responsive and works smoothly on any device, ensuring you can manage your tasks from anywhere. From simple errands to bigger projects, this to-do list has you covered for an efficient and organized day.',
        imageUrl: '/todo.png',
        projectLink: 'https://todo-list-azure-two.vercel.app/',
        bgColor: 'bg-gray-800',
        border: 'border-blue-900',
        bg_btn: 'bg-blue-500',
        bg_hover: 'hover:bg-blue-600',
      },
      {
        title: '4 Play Tic-Tac-Toe and Challenge Your Friends! ❌⭕',
        date: 'Nov 17, 2024',
        content: 'Relive the classic Tic-Tac-Toe game with a modern twist! This website lets you play the iconic 3x3 grid game against friends or the computer. Whether you are looking for a quick distraction or want to challenge your strategic thinking, Tic-Tac-Toe is the perfect game for all ages. The interactive interface makes it easy to click and place your X or O on the grid. With a responsive design, this game works perfectly across all devices, ensuring a smooth gaming experience anywhere you go. Challenge yourself or friends to a competitive game of Tic-Tac-Toe today!',
        imageUrl: '/tic-tac.png',
        projectLink: 'https://tic-tac-toe-game-eight-blue.vercel.app/',
        bgColor: 'bg-gray-800',
        border: 'border-blue-900',
        bg_btn: 'bg-blue-500',
        bg_hover: 'hover:bg-blue-600',
      },
      {
        title: '5. Calculate Your Age in Seconds, Years, and More ⏳',
        date: 'Nov 17, 2024',
        content: ' This Age Calculator website is a quick and easy tool to find out how old you are in various time units! Simply enter your birthdate, and instantly see your age in years, months, days, hours, minutes, and even seconds. Whether you’re curious about your age or need it for a special occasion, this tool provides precise calculations. Designed with a clean interface using HTML and CSS, and powered by JavaScript for real-time calculations, this tool works seamlessly on both mobile and desktop devices. Track your age accurately and have fun exploring how much time has passed since your birth!',
        imageUrl: '/age.png',
        projectLink: 'https://age-calculator-pearl-eta.vercel.app/',
        bgColor: 'bg-gray-800',
        border: 'border-blue-900',
        bg_btn: 'bg-blue-500',
        bg_hover: 'hover:bg-blue-600',
      },
      {
        title: '6. Set Your Countdown and Watch the Time Tick Away! ⏰',
        date: 'Nov 17, 2024',
        content: ' This Countdown Timer website allows you to create personalized countdowns for any event! Whether you’re preparing for a special day, holiday, or an important deadline, simply set the date and time, and watch as the clock counts down. Built with Next.js, the app provides a fast and interactive experience, with real-time updates and a responsive design that works seamlessly across devices. The customizable timer ensures that you can style and adjust it to fit your website or project needs. Stay organized, excited, and on track with a countdown that keeps you informed every second!',
        imageUrl: '/count.png',
        projectLink: 'https://count-down-timer-teal-ten.vercel.app/',
        bgColor: 'bg-gray-800',
        border: 'border-blue-900',
        bg_btn: 'bg-blue-500',
        bg_hover: 'hover:bg-blue-600',
      },
      {
        title: '7. Age Calculator using HTML, CSS, and JavaScript 🎂📅',
        date: 'Nov 17, 2024',
        content: 'This Digital Watch website is a real-time clock 🕰 designed with simplicity and style ✨. Displaying the current time 🕒, date 📅, and even seconds ⏳, it’s perfect for users who need quick access to the time at all times. Built using HTML, CSS, and JavaScript, the digital watch updates in real-time 🔄 with a smooth and responsive design 📱💻. Whether you are using it on your desktop 💻 or mobile device 📱, it ensures you can always keep track of time with ease. Customize the watch’s design 🎨 to suit your style and have the time displayed in a clear, modern format 🌟. Stay punctual ⏰ and stylish ✨ with this interactive digital watch!',
        imageUrl: '/digital-watch.png',
        projectLink: 'https://digital-watch-amber.vercel.app/',
        bgColor: 'bg-gray-800',
        border: 'border-blue-900',
        bg_btn: 'bg-blue-500',
        bg_hover: 'hover:bg-blue-600',
      },
      {
        title: '8. Explore Our Products and Shop Anytime, Anywhere 🛍',
        date: 'Nov 17, 2024',
        content: ' This Dynamic E-Commerce website is built with Next.js to provide an ultra-fast, responsive shopping experience. Browse through a wide range of products, explore detailed product descriptions, and view real-time stock updates 🔄. The website offers seamless navigation, allowing users to filter products by categories, price, and ratings 🌟. With integrated cart functionality 🛒 and a secure checkout system 💳, customers can enjoy a smooth and hassle-free shopping experience. Built with Next.js, the site is optimized for performance and accessibility across all devices 📱💻. Whether you’re looking for the latest trends or essential products, shop confidently with our dynamic and user-friendly online store!',
        imageUrl: '/e-comm.jpeg',
        projectLink: 'https://hackathon-q2-ten.vercel.app/',
        bgColor: 'bg-gray-800',
        border: 'border-blue-900',
        bg_btn: 'bg-blue-500',
        bg_hover: 'hover:bg-blue-600',
      },
      {
        title: '9. Updated Next.js 15 Blog - Latest Features and Enhancements 🚀',
        date: 'Nov 17, 2024',
        content: 'In this blog, we take a deep dive into the newly released Next.js 15, highlighting the most notable features and performance improvements. From enhanced routing capabilities 📍 to optimized server-side rendering 🖥, Next.js 15 brings powerful tools for developers. Learn about the streamlined development experience, faster builds, and enhanced support for static and dynamic content 🛠. Whether you are building a small personal project or a large-scale production app, Next.js 15 offers the performance and flexibility you need to take your web development to the next level 🚀. Stay up-to-date with the latest features and best practices for a more efficient, scalable, and modern web development workflow!',
        imageUrl: '/nextjs blog.png',
        projectLink: 'https://hackathon-q2-ten.vercel.app/',
        bgColor: 'bg-gray-800',
        border: 'border-blue-900',
        bg_btn: 'bg-blue-500',
        bg_hover: 'hover:bg-blue-600',
      },
      // Other projects...
    ];
  
    return posts.find((post) => post.title.toLowerCase().includes(id.toLowerCase())) || null;
  };

  const post: Post | null = getPostById(id);

  if (!post) {
    return notFound(); 
  }

return (
    <div className={`max-w-full mx-auto p-6 relative ${post.bgColor} text-white `}>
      <article className="relative shadow-lg rounded-lg p-8">
      <section className="max-w-6xl mx-auto text-gray-800 body-font">
  <div className="container flex flex-col lg:flex-row items-center justify-between px-5 py-24">
    {/* Text Section */}
    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 text-left lg:pr-10">
      <h1 className="title-font text-4xl sm:text-5xl mb-6 font-extrabold text-white leading-tight">
        <Typewriter
          options={{
            strings: [post.title],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <p className='textwhite'>{post.date}</p>
      <p className="mb-4 leading-relaxed text-base sm:text-lg text-white sm:leading-7">
        {post.content}
      </p>
      <div className="flex flex-col sm:flex-row sm:space-x-4 mt-8 space-y-4 sm:space-y-0">
        <Link href={post.projectLink}>
          <button
            className={`inline-flex text-white ${post.bg_btn} border-0 py-3 px-8 focus:outline-none ${post.bg_hover} rounded-lg shadow-md transition duration-300 w-full sm:w-auto`}
          >
            Check it Here
          </button>
        </Link>

        {/* Uncomment if you need Source Code Button */}
        {/* <Link href={post.projectLinkG}>
          <button className="inline-flex text-[#4e342e] bg-[#ffe0b2] border-0 py-3 px-8 focus:outline-none hover:bg-[#ffcc80] rounded-lg shadow-md transition duration-300 w-full sm:w-auto">
            Source Code
          </button>
        </Link> */}
      </div>
    </div>

    {/* Image Section */}
    <div className="lg:w-1/2 w-full flex justify-center">
      <div className="relative transition-transform transform hover:scale-105 duration-500">
        <Image
          className="rounded-lg shadow-lg"
          src={post.imageUrl}
          alt={post.title}
          width={720}
          height={600}
          layout="responsive"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30 rounded-lg transition-opacity duration-500 hover:opacity-0" />
      </div>
    </div>
  </div>
</section>
  
        {/* Comment Section */}
            <CommentSection />
      </article>
    </div>
)};