import React from "react";
import Title from "../layouts/Title";

const Resume = () => {
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="4+ YEARS OF EXPERIENCE" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-4">
          <li className="resumeLi">Education</li>
          <li className="resumeLi">Professional Skills</li>
          <li className="resumeLi">Experience</li>
          <li className="resumeLi">Achievements</li>
        </ul>
      </div>
      <div className="py-12 font-titleFont">
        <p className="text-sm text-designColor tracking-[4px]">1998-2010</p>
        <h2 className="text-4xl font-bold">Education Quality</h2>
      </div>
      <div>
        <resumeCard />
        <resumeCard />
        <resumeCard />
      </div>
    </section>
  );
};

export default Resume;
