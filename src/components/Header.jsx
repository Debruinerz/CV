import {useState} from 'react'

import{AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'


const Header = () => {
  
    const[nav,setNav] = useState(false);
    const handleNav=()=>{
      setNav(!nav);
    }

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setNav(false); 
        }
      };

    return (
    <div className=" h-24 mx-auto w-full flex justify-between items-center max-w-[1240px] px-4 border-b-2">
        <h1 className=" text-[#bbc93b] text-3xl md:text-5xl font-bold">CV</h1>
        <ul className="hidden md:flex p-2">
          <li className="p-3 underline hover:text-[#bbc93b]" onClick={() => scrollToSection('About')}>About Me</li>
          <li className="p-3 underline hover:text-[#bbc93b]" onClick={() => scrollToSection('Education')}>Education</li>
          <li className="p-3 underline hover:text-[#bbc93b]" onClick={() => scrollToSection('Experience')}>Experience</li>
          <li className="p-3 underline hover:text-[#bbc93b]" onClick={() => scrollToSection('Languages')}>Languages</li>
          <li className="p-3 underline hover:text-[#bbc93b]" onClick={() => scrollToSection('Skills')}>Skills</li>
        </ul>

        <div onClick={handleNav} className='block md:hidden fixed right-5'>
             {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/> }
        </div>
        
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500': 'fixed left-[-100%]'}>
            <h1 className=" h-24 text-[#bbc93b] text-3xl md:text-5xl font-bold px-4 pt-7 border-b-2">CV</h1>
                    
            <ul >
              <li className="p-3 underline hover:text-[#bbc93b]" onClick={() => scrollToSection('About')}>About Me</li>
              <li className="p-3 underline hover:text-[#bbc93b]" onClick={() => scrollToSection('Education')}>Education</li>
              <li className="p-3 underline hover:text-[#bbc93b]" onClick={() => scrollToSection('Experience')}>Experience</li>
              <li className="p-3 underline hover:text-[#bbc93b]" onClick={() => scrollToSection('Languages')}>Languages</li>
              <li className="p-3 underline hover:text-[#bbc93b]" onClick={() => scrollToSection('Skills')}>Skills</li>
          </ul> 
        </div>
    

    </div>
  )
}

export default Header