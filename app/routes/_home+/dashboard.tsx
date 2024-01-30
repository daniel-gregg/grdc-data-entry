
import {Navbar} from '~/components/Navbar'; 
import { Link } from '@remix-run/react';

export default function dashboard() {
    return (
        <div className="bg-[#7A9A8B] py-20 sm:py-20">
            <Navbar />

            {/* hero */}
            <section className="h-196 bg-white dark:bg-gray-900 items-center">
                <div className="max-w-screen-xl px-14 py-36 mx-auto lg:gap-8 xl:gap-0 lg:py-36">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">What would you like to do?</h1>
                        <Link to="/admin" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            View account
                        </Link>
                        <Link to="/input" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            Input new data
                        </Link> 
                        <Link to="/data" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            View data
                        </Link>           
                </div>
            </section>
        </div>
    )
}
