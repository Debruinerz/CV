

const Languages = () => {
  return (
    <div id="Languages" className=" px-4 mx-auto max-w-[1240px] md:min-h-96 border-b border-gray-500"> 
        
        <h1  className=" text-[#bbc93b] text-2xl md:text-3xl  font-bold underline"> Languages and Frameworks </h1>
        <p className="pt-4">
            Throughout my academic studies I have used these different programming 
            languages and frameworks to a varying degree. These are listed below in no particular order,
            but have been split into 2 seperate groups from to give an idea to which I am most familiar with.
        </p>

        <div className=" grid grid-cols-2 pt-4 ">
            <div className="w-8/12 mx-auto">
                <h2>Most proficient in:</h2>
                <h3>   •	HTML</h3>
                <h3>   •	CSS</h3>
                <h3>   •	Java</h3>
                <h3>   •	JavaScript</h3>
                <h3>   •	SQL</h3>
            </div>

            <div className="w-8/12 mx-auto"> 
                <h2>Familiar with:</h2>
                <h3>   •	.NET</h3>
                <h3>   •	REACT</h3>
                <h3>   •	PHP</h3>
                <h3>   •	C#</h3>
                <h3>   •	Python</h3>
                <h3>   •	Nodejs</h3>
            </div>
        </div>

    </div>
  )
}

export default Languages