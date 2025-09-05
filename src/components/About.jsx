import React from 'react';
import { Link } from 'react-scroll';
import {
  SiPython,
  SiPandas,
  SiR,
  SiNumpy,
  SiTensorflow,
  SiC,
  SiCplusplus,
  SiMysql,

} from "react-icons/si";

export default function About() {
  return (
    <div   data-aos="fade-left" className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">

  
      <div className="absolute inset-0 pointer-events-none">


     <SiPython className="text-yellow-400 text-5xl absolute top-16 left-10 md:top-20 md:left-20 xl:left-32 animate-float" />
<SiPandas className="text-pink-300 text-5xl absolute top-32 right-10 md:top-40 md:right-20 xl:right-32 animate-float-delay" />
<SiR className="text-blue-400 text-5xl absolute bottom-28 right-12 md:bottom-32 md:right-24 xl:right-36 animate-float-delay" />
<SiNumpy className="text-indigo-400 text-5xl absolute top-1/3 left-10 md:left-20 xl:left-28 animate-float" />
<SiTensorflow className="text-orange-500 text-5xl absolute bottom-1/4 right-8 md:right-12 xl:right-20 animate-float-delay" />


<SiC className="text-blue-300 text-5xl absolute top-48 right-6 md:top-56 md:right-10 xl:right-16 animate-float" />
<SiCplusplus className="text-blue-500 text-5xl absolute bottom-36 left-28 md:bottom-40 md:left-40 xl:left-52 animate-float-delay" />
<SiMysql className="text-teal-400 text-5xl absolute bottom-24 left-12 md:bottom-28 md:left-20 xl:left-32 animate-float" />

      </div>

    
      <h1 className="textsec text-3xl md:text-6xl font-bold m-5 z-10">WHO AM I ?</h1>
      <p className="text-white text-base md:text-xl text-center m-10 max-w-3xl px-4 z-10">
        I’m Mahmoud Elfaham, a Biomedical Engineer with a strong passion for transforming data into meaningful insights. I’m particularly interested in data analysis and visualization, and I enjoy working on projects that uncover patterns, solve problems, and support decision-making. I'm currently seeking opportunities where I can contribute to impactful projects in healthcare and business intelligence.
      </p>

      <div className="flex justify-center z-10" data-aos="zoom-in" data-aos-delay="10">
        <Link
          to="Projects"
          className="inline-block px-4 py-2 btnbc text-sm md:text-xl text-gray-900 font-semibold rounded-xl hover:bg-indigo-700 hover:text-white transition duration-300 cursor-pointer"
        >
          SHOW MY PROJECTS
        </Link>
      </div>
    </div>
  );
}
