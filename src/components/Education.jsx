const Education = () => {
  return (
    <div id="Education" className=" px-4 mx-auto max-w-[1240px] min-h-96 border-b border-gray-500">
      <h1 className=" text-[#bbc93b] text-2xl md:text-3xl  font-bold underline">
        Education
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-3 justify-between pt-4 gap-y-8 grid-rows-auto">
        <div className="border mx-auto w-[400px] md:w-10/12">
          <h2 className=" uppercase border-b-4 p-4 font-bold ">
            ulster university
          </h2>
          <h3 className="border-b pb-1">(September 2018-2023)</h3>
          <h3>Bachelor of Science in computing systems</h3>
          <h3> 1st class honors</h3>
          <h3 className="pb-2 pt-3">Dean’s list 2019 and 2023</h3>
        </div>

        <div className="border mx-auto  w-[400px] md:w-10/12">
          <h2 className="uppercase border-b-4 p-4 font-bold">belfast met</h2>
          <h3 className="border-b pb-1">(September 2016-2018)</h3>
          <h3 className="pb-2">
            Higher education level 4 - Software Engineering
          </h3>
        </div>

        <div className="border mx-auto  w-[400px] md:w-10/12">
          <h2 className="uppercase border-b-4 p-4 font-bold">
            de la salle college
          </h2>
          <h3 className="border-b pb-1">(September 2009 – June 2016)</h3>
          <h2 className="font-bold py-1 underline">A Levels</h2>
          <h3> Applied ICT – Grade B – June 2016 </h3>
          <h3> Business level 3 – Distinction – June 2016</h3>
          <h2 className="font-bold py-1 underline">GCSES</h2>
          <h3> 7 GCSE 1 A* 4Bs and 2 C including Maths and English</h3>
          <h3 className="pb-2">
            {" "}
            A* In Irish – Joint 3rd highest in Northern Ireland.
          </h3>
        </div>
      </div>

      <div className="">
        <div className=" py-6 md:py-10 text-center ">
          <h1 className=" text-[#bbc93b] text-lg md:text-xl  font-bold pt-4">
            {" "}
            MTA CERTIFICATIONS
          </h1>
          <h3>MTA Networking Fundamentels - july 2020</h3>
          <h3>MTA Database Administration - june 2017</h3>
          <h3>MTA Software Development Fundamentals jan-2018</h3>
        </div>
      </div>
    </div>
  );
};

export default Education;
