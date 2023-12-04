import Link from "next/link";
export default function NavElement ({ name, link}){
    return (
        <Link className='text-gray-400 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0' href={link}>
            {name}   
        </Link>
    )
}