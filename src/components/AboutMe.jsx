

const AboutMe = () => {
  return (
    <div id="About" className=" px-4 mx-auto max-w-[1240px] md:min-h-96 border-b border-gray-500"> 
        
        <h1  className=" text-[#bbc93b] text-2xl md:text-3xl  font-bold underline">About Me</h1>
        <div className="pt-4 w-96">
            <h2 > Aodhán Oneill De Bruin</h2>
            <h2>  37 Bingnian Drive</h2>
            <h2> BT11 8JA</h2>
            <h2> Belfast</h2>
            <h2> 07511178037 </h2>
            <h2>aodhanoneill.oneill@outlook.com </h2>
        </div>

        <div className="py-6 md:py-10 text-center "> 
            <h3 className="uppercase text-[#bbc93b] text-xl md:text-2xl  font-bold">profile summary</h3>
            <p className="pt-3 last:md:w-3/5  w-5/6 mx-auto"> 
                A very ambitious, hardworking, and conscientious computing systems graduate, who has shown
                to be a self-motivated and committed individual demonstrated through my first-class honors.
                Through this I have developed not only my timekeeping skills, problem solving and ability to 
                work under pressure but also my knowledge of different languages and frameworks such as React,
                ASP.NET, Java and SQL. Now looking to apply this knowledge and skills to a role within the IT industry.
             </p>
        </div>
        
    </div>
    
    
  )
}

export default AboutMe