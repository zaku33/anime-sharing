import Link from "next/link";
import Config from "./Config";

export default function Navbar() {
  return (
    <nav className="border-blue-300 px-2 sm:px-4 py-2 bg-main-navbar flex flex-row flex-wrap w-full">
      <div className="container flex flex-wrap items-center justify-between min-w-full m-2">
        <Link href='/homepage'>
          <div className='inline-flex items-center p-2'>
            <svg
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              className='fill-current text-black h-8 w-8 mr-2'
            >
              <path d='M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z' />
            </svg>
            <span className='text-xl text-black font-bold uppercase tracking-wide'>
              Anime sharing
            </span>
          </div>
        </Link>

        <button data-dial-toggle="navbar-default" aria-controls="navbar-default" aria-expanded="false" type="button" className="inline-flex bg-gray-700 items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>

        <div className="group-hover:flex hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col mt-4 border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <li>
              <Link href='/top-trending'>
                <div className="inline-flex items-center mr-4 font-bold rounded"><span className="text-lg text-hot-trend">Top trending</span></div>
              </Link>
            </li>
            <li>
              <Link href='/current-season'>
                <div className="inline-flex items-center mr-4 rounded"><span className="text-lg text-black">Current list</span></div>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <div className="inline-flex items-center mr-4 rounded"><span className="text-lg text-black">Chat group</span></div>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <div className="inline-flex items-center mr-4 rounded"><span className="text-lg text-black">About</span></div>
              </Link>
            </li>
            <li>
              <Config />
            </li>
          </ul >
        </div >
      </div >
    </nav >
  );
}
