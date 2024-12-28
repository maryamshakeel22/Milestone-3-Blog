import Link from "next/link";
import Image from "next/image";
import { FaArrowCircleRight  } from "react-icons/fa";

const NewPost = () => {
  const posts = [
    {
      id: '1',
      title: 'Coffee Website',
      date: 'Nov 17, 2024',
      excerpt:'A sleek and stylish coffee website designed to showcase the love for coffee ☕❤ with a modern user interface. Featuring a clean, responsive layout 📱💻, it highlights coffee products, services, and essential information, all while maintaining a visually appealing experience with Tailwind CSS styling ✨.',
      image: '/coffe.jpeg',
    },
    {
      id: '2',
      title: 'Resume Website',
      date: 'Nov 18, 2024',
      excerpt:
       'A fast and easy-to-use resume generator that helps you create a standout resume 📄. With customizable templates 🖥, this tool lets you highlight your skills, experience, and qualifications in a polished format, ready to impress employers 🚀.',
      image: '/cv tem.PNG',
    },
    {
      id: '3',
      title: 'Todo Application',
      date: 'Nov 19, 2024',
      excerpt:
        'A simple and user-friendly to-do list application that helps you add, edit, and delete tasks. Stay on top of your daily responsibilities with an intuitive interface that keeps you organized. Built with HTML, CSS, and JavaScript for a seamless experience.',
      image: '/todoo.jpeg',
    },
    {
      id: '4',
      title: 'Tic Tac Toe',
      date: 'Nov 20, 2024',
      excerpt:
        ' Enjoy the timeless game of Tic-Tac-Toe, where you can challenge a friend or play against the computer. Simple, fun, and easy-to-use, this website brings the classic game to life with an interactive interface. Play anytime and anywhere!',
      image: '/tic.jpeg',
    },
    {
      id: '5',
      title: 'Age Calculator',
      date: 'Nov 21, 2024',
      excerpt:
        'Quickly calculate your age with this simple tool. Enter your birthdate, and the website will calculate your age in years, months, days, hours, and even seconds! Built with HTML, CSS, and JavaScript for an interactive experience⏳.',
      image: '/Age calculator.PNG',
    },
    {
      id: '6',
      title: 'Count Down Timer',
      date: 'Nov 22, 2024',
      excerpt:
        'Create custom countdown timers to track the time remaining until your next big event. Whether it’s a birthday, holiday, or deadline, this Next.js-powered timer lets you customize and display the countdown in real time.',
      image: '/count.png',
    },
    {
      id: '7',
      title: 'Digital Watch',
      date: 'Nov 22, 2024',
      excerpt:
        'A modern and sleek digital watch that displays the current time in real-time ⏱. Powered by HTML, CSS, and JavaScript, this website gives you a clear and stylish view of the time, right at your fingertips 📱💻!',
      image: '/digital.jpeg',
    },
    {
      id: '8',
      title: 'E-commerce Website',
      date: 'Nov 22, 2024',
      excerpt:
        ' A dynamic, fast-loading e-commerce website built with Next.js. Browse through categories, view detailed product pages, and enjoy a seamless shopping experience with real-time product updates, checkout options, and more!',
      image: '/e-comm.jpeg',
    },
    {
      id: '9',
      title: 'Next JS Blog',
      date: 'Nov 22, 2024',
      excerpt:
        'Explore the exciting updates in Next.js 15, including new features, performance improvements, and optimizations. This blog covers everything you need to know about the latest version of Next.js to keep your projects cutting-edge and efficient!',
      image: '/nextjs blog.PNG',
    },
  ];

  return (
    <div id="blog" className="relative bg-gradient-to-r from-purple-500 to-pink-500 text-white py-24">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section >
          <h2 className="text-4xl font-bold text-center text-white mb-12">Latest Posts</h2>


          {/* Post Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="bg-gradient-to-br from-gray-800 via-gray-700 to-black border-2 border-white text-white p-6 shadow-xl rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:translate-y-2 hover:border-gray-600"
              >
                <div className="mb-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg shadow-md"
                  />
                </div>
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-sm text-yellow-500 mb-4">{post.date}</p>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex items-center space-x-2 text-yellow-400 font-semibold transition duration-300">
                  <p>Read More</p>
                  <FaArrowCircleRight className="text-xl" />
                  {/* <FaReact className="text-blue-400 text-xl" /> */}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default NewPost;