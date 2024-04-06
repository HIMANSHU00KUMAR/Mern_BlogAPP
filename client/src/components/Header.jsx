/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className=' bg-slate-300'>
    <div className="container mx-auto px-4 py-2 flex justify-between items-center md:flex-row flex-col">
      <Link to="/" className="text-3xl font-bold underline ">Himanshu's Blog</Link>

      <nav className="hidden md:flex space-x-4">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/about" className="hover:text-gray-400">About</Link>
        <Link to="/projects" className="hover:text-gray-400">Projects</Link>
      </nav>

      <div className="flex items-center md:hidden">
        <button className="text-white hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6zM12 18v-4m0 0h4m0 0v-4m0 4h-4z" />
          </svg>
        </button>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-2 rounded-md  text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
        />
        <button className="text-white hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white px-3 py-2 rounded-md bg-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z" />
          </svg>
        </button>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <Link to="/signin" className="text-white hover:text-gray-400 px-3 py-2 rounded-md bg-gray-700">Sign In</Link>
      </div>
    </div>
  </header>
);
}

export default Header
