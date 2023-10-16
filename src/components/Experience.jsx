import { useState } from "react";

const Experience = () => {

    const [showMore, setShowMore] = useState(false);
    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

  return (
    <div id="Experience" className="px-4 mx-auto max-w-[1240px] min-h-96 border-b border-gray-500">
        <h1 className=" text-[#bbc93b] text-2xl md:text-3xl  font-bold underline">Experience</h1>

        <h3 className="pt-4 text-xl">SKG design Group - 19/02/2018 to 01/06/2018</h3>
        <p className="pt-4">Completed 15-week placement within a small group of software developers to create a showroom type website.
            The intended purpose of the work was to create a website that would locally run for a furniture showroom in Ukraine,
            in which staff would be able to easily show and display all available options on the different types of furniture available.
        </p>
        
        {showMore ? (
        <>
          <p className="pt-2">
            The placement entailed myself and another developer working on a project under a project lead, to create a .NET application
            in which it would enable staff of a furniture showroom to display the different types styles and the full range of colors of
            the products that they had on sale, which could not be physically displayed in store. The main languages used were C#, HTML,
            CSS, JavaScript, and SQL.
          </p>
          <p className="pt-2">
            The work style was a hybrid between office and home-based working, 3 times a week being in the office (M, W, F) and 2 days a week at home (T, T).
            while in the office, work was delegated to each member through short meetings at the beginning of the day for work to be carried out,
            then at the end of the day for the following day when working from home.
          </p>
          <p className="pt-2">
            The responsibilities that were given to me mainly were the designing, implementation, and testing of the front end of the application, while also carrying out
            smaller backend-related tasks such as querying the database or small implementation tasks involving C#.
          </p>
        </>
      ) : null}

        <button className="text-[#bbc93b] cursor-pointer underline" onClick={toggleShowMore}>
            {showMore ? 'Show Less' : 'Show More'}
        </button>

    </div>
  )
}

export default Experience