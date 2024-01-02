import affine_logo_large from "../../public/assets/images/Affine.png";
import {
    Link,
  } from "@remix-run/react";

export const Landing = () => {
    
    return (
        <div className="bg-[#1d6146] py-6 sm:py-6">

            {/* navbar */}
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div></div>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <Link to="/login" type="button" className="text-white bg-[#1d6146] hover:ring-4 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</Link>
                        <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="/" className="block py-2 px-3 md:p-0 text-white bg-[#1d6146] rounded md:bg-transparent md:text-[#1d6146] md:dark:text-[#1d6146]" aria-current="page">Home</a>
                        </li>
                        <li>
                            <Link to="/about" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-[#1d6146] md:hover:bg-transparent md:hover:text-[#1d6146] md:dark:hover:text-[#1d6146] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                        </li>
                        <li>
                            <a href="/services" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-[#1d6146] md:hover:bg-transparent md:hover:text-[#1d6146] d:dark:hover:text-[#1d6146] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                        </li>
                        <li>
                            <a href="/contact" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-[#1d6146] md:hover:bg-transparent md:hover:text-[#1d6146] md:dark:hover:text-[#1d6146] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                        </li>
                        <link rel="prefetch" />
                        </ul>
                    </div>
                </div>
            </nav>
            
            {/* hero */}
            <section className="bg-white dark:bg-gray-900">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-2 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Supply chain sustainability assessment and communication</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Affine makes assessing and communicating your supply chain sustainability performance easy and valuable.</p>
                        <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            About Affine
                        </a> 
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src= {affine_logo_large} alt="mockup" />
                    </div>                
                </div>
            </section>

            {/* about and other small content (body) links */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        <div className="flex flex-col">
                            <div className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                                {/*  <svg className="h-5 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clipRule="evenodd" />
                                </svg> */}
                                Robust and effective sustainability assessments
                            </div>
                            <div className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                                <p className="flex-auto">Sustainability assessment in your supply chains doesn’t need to be hard, for you or your suppliers.</p>
                                <p className="mt-6">
                                <a href="#" className="text-sm font-semibold leading-6 text-gray-300">Learn more <span aria-hidden="true">→</span></a>
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                                {/* <svg className="h-5 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                                </svg> */}
                                Simple, and secure, reporting to stakeholders
                            </div>
                            <div className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                                <p className="flex-auto">Know your sustainability but struggling to communicate impact in a trusted way? Try Affine.</p>
                                <p className="mt-6">
                                <a href="#" className="text-sm font-semibold leading-6 text-gray-300">Learn more <span aria-hidden="true">→</span></a>
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                                {/* <svg className="h-5 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z" clipRule="evenodd" />
                                </svg> */}
                                Build value from, and for, your suppliers
                            </div>
                            <div className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                                <p className="flex-auto">Build value around sustainability reporting alongside your suppliers and customers through Affine.</p>
                                <p className="mt-6">
                                <a href="#" className="text-sm font-semibold leading-6 text-gray-300">Learn more <span aria-hidden="true">→</span></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
      );
}