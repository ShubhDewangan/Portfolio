import React from "react";

const skills = [
  "Python",
  "HTML",
  "CSS",
  "Javascript",
  "MySQL",
  "Numpy",
  "Pandas",
  "ReactJS",
];

const InfiniteDisplay = () => {
  return (

    <div className="flex flex-col gap-5 items-center">
      <h2 className="text-[14px] md:text-2xl">Languages and Libraries I work with:</h2>
      <div className="w-full overflow-hidden bg-black py-6 md:py-10">
      <div className="relative flex w-max animate-scroll gap-10 md:gap-16">
        {[...skills, ...skills].map((skill, index) => (
          <span
            key={index}
            className="text-3xl md:text-7xl font-bold text-white opacity-80 hover:opacity-100 transition duration-300 md:hover:scale-110 cursor-default" 
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
    </div>
  );
};

export default InfiniteDisplay;
