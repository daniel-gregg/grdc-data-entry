import landing from "../../public/assets/images/landing.png";
import {Navbar} from '~/components/Navbar';
import { Link } from "@remix-run/react" 

export const Landing = () => {
    
    return (
        <div className="min-h-screen bg-[#7A9A8B] py-6 sm:py-6">

            {/* navbar */}
            <Navbar/>
            
            {/* hero */}
            <section className="h-196 bg-white dark:bg-gray-900">
                <div className="grid max-w-screen-xl px-4 py-36 mx-auto lg:gap-8 xl:gap-0 lg:py-36 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Farming Systems South: Data entry portal</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Web-based application providing for simplified data recording from field trials within the GRDC Farming Systems South project</p>
                        <Link to="/auth/login" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            Login
                        </Link> 
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src= {landing} alt="mockup" />
                    </div>                
                </div>
            </section>
        
        </div>
        
      );
}