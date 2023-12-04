import Link from 'next/link';
import NavElement from './NavComps';
import Script from 'next/script';
const Navbar = () => {
return (
        // <div className="flex justify-around items-center w-full h-12 bg-slate-500 bg-opacity-50 sticky top-0 left-0 backdrop-blur-lg font-mono z-100">
        //     <NavElement name="home" link="/"></NavElement>
        //     <NavElement name="feed" link="/feed/1"></NavElement>
        //     <NavElement name="general" link="/category/general"></NavElement>
        //     <NavElement name="entertainment" link="/category/entertainment"></NavElement>
        //     <NavElement name="health" link="/category/health"></NavElement>
        //     <NavElement name="science" link="/category/science"></NavElement>
        //     <NavElement name="sports" link="/category/sports"></NavElement>
        //     <NavElement name="technology" link="/category/technology"></NavElement>
        //     <Link className='m-8 cursor-pointer hover:text-blue-400' href ='https://twitter.com/_abhirajsinha_'>twitter</Link>
        // </div>

    <div className="max-w-3xl mx-auto mt-4">
        <Script src='https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js'></Script>
        <nav className="border-gray-200">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
                <button data-collapse-toggle="mobile-menu" type="button" className="md:hidden ml-3 text-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-centerjustify-center" aria-controls="mobile-menu-2" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
                <div className="hidden md:block w-full md:w-auto" id="mobile-menu">
                    <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                        <li>
                        <NavElement name="home" link="/"></NavElement>
                        </li>
                        <li>
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="text-gray-400 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto">country <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
                            <div id="dropdownNavbar" className="hidden bg-white text-sm z-10 list-none divide-y px-1 divide-gray-100 rounded shadow my-4 w-44">
                                <ul className="py-1" aria-labelledby="dropdownLargeButton">
                                <li>
                                    <NavElement name="India" link="/country/in" />
                                </li>
                                <li>
                                    <NavElement name="United States" link="/country/us"/>
                                </li>
                                <li>
                                    <NavElement name="United Kingdom" link="/country/gb"/>
                                </li>
                                <li>
                                    <NavElement name="China" link="/country/cn" />
                                </li>        
                                <li>
                                    <NavElement name="Japan" link="/country/jp" />
                                </li>        
                                </ul>

                            </div>
                        </li>
                        <li>
                        <NavElement name="general" link="/category/general"></NavElement>
                        </li>
                        <li>
                        <NavElement name="entertainment" link="/category/entertainment"></NavElement>                   
                        </li>
                        <li>
                        <NavElement name="health" link="/category/health"></NavElement>
                        </li>
                        <li>
                        <NavElement name="science" link="/category/science"></NavElement>
                        </li>
                        <li>
                        <NavElement name="sports" link="/category/sports"></NavElement>
                        </li>
                        <li>
                        <NavElement name="technology" link="/category/technology"></NavElement>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>

    )
}
export default Navbar