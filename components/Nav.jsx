import { navLinks } from "@/constants"
import Image from "next/image"
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "."
import Link from "next/link";


const Nav = () => {
  
  return (
    <header className='padding-x py-8 w-full'>
    <nav className='flex justify-between items-center max-container'>
      <a href='/'>
        <Image
          src="/images/logo.png"
          alt='logo'
          width={180}
          height={160}
          
        />
      </a>
      <ul className=' flex justify-center  items-center gap-16 max-lg:hidden'>
        {navLinks.map((item) => (
          <li key={item.label} className='font-montserrat leading-normal text-lg animate-fadeIn transition-transform transform hover:scale-105 hover:text-blue-400'>
            <Link
              href={item.href}
              
            >
             
                {item.label}
            

            </Link>
          </li> 
        ))}
      </ul>
      <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-4">
     <Link href="/appointment">
     <Button label='Book Appointment' backgroundColor='bg-blue-400' textColor='text-white'/>
     </Link>
      </div>
      <div className='hidden max-lg:block'>
       <GiHamburgerMenu />
      </div>
    </nav>
  </header>
  )
}

export default Nav