

const Skills = () => {
  return (
    <div id="Skills" className=" px-4 mx-auto max-w-[1240px] md:min-h-96 border-b border-gray-500"> 
        <h1  className=" text-[#bbc93b] text-2xl md:text-3xl  font-bold underline"> Skills and Interests </h1>
        
        <div className=" grid grid-cols-2 pt-4 ">
            <div className="w-8/12 mx-auto">
                <h2> Skills :</h2>
                <h3>   •	Problem solving</h3>
                <h3>   •	Critical Thinking </h3>
                <h3>   •	Logical Thinking </h3>
                <h3>   •	Teamworking and Interpersonal skills</h3>
                <h3>   •	Time management</h3>
                <h3>   •	Creativity and innovation</h3>
            </div>

            <div className="w-8/12 mx-auto"> 
                <h2>Interests </h2>
                <h3>   •	5 aside football</h3>
                <h3>   •	Snooker/pool </h3>
                <h3>   •	Gaming</h3>
                <h3>   •	Travel</h3>
                <h3>   •	Sports</h3>
            </div>
        </div>


    </div>
  )
}

export default Skills