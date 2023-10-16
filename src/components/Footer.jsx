
const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); 
    }
  };
  return (
    <div className="mx-auto max-w-[1240px] md:h-96 border-b border-gray-500  ">
        
        <h1 className=" text-[#bbc93b] text-3xl md:text-4xl font-bold w-1/12 mx-auto ">CV</h1>
        
        <div className="  hidden md:block mx-auto ">

          <div className="grid grid-cols-2">
          <div className="w-6/12 mx-auto">
            <h1 className="font-bold underline text-[#bbc93b]">Site Links</h1>
            <ul className="pt-2">
              <li className="pt-3 underline hover:text-[#bbc93b]" onClick={() => scrollToSection('About')}>About Me</li>
              <li className="pt-3 underline hover:text-[#bbc93b]" onClick={() => scrollToSection('Education')}>Education</li>
              <li className="pt-3 underline hover:text-[#bbc93b]" onClick={() => scrollToSection('Experience')}>Experience</li>
              <li className="pt-3 underline hover:text-[#bbc93b]" onClick={() => scrollToSection('Languages')}>Languages</li>
              <li className="pt-3 underline hover:text-[#bbc93b]" onClick={() => scrollToSection('Skills')}>Skills</li>
          </ul>

          </div>


          <div className="w-8/12 mx-auto">
            <h1 className="font-bold underline text-[#bbc93b]">Contact me</h1>

            <h2  className="pt-4"> Aodhán Oneill De Bruin</h2>
            <h2 className="pt-2">  37 Bingnian Drive</h2>
            <h2 className="pt-2"> BT11 8JA</h2>
            <h2 className="pt-2"> Belfast</h2>
            <h2 className="pt-2"> 07511178037 </h2>
            <h2 className="pt-2">aodhanoneill.oneill@outlook.com </h2>
          </div>
          </div>
          
        </div>
        
    </div>
  )
}

export default Footer