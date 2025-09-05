import { useEffect, useState } from 'react';
import axios from 'axios';
export default function Skills() {
  const [Skillss, setSkills] = useState([]);

  useEffect(() => {
    axios.get('https://api.sheetbest.com/sheets/c02cb7d6-5896-4507-bb66-89746f70f3e7') 
      .then((res) => {
        setSkills(res.data);
      });
  }, []);

  return (
   <div className="flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 py-10 min-h-screen">
  <h1
    data-aos="fade-left"
    className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-28 drop-shadow-lg text-center"
  >
    My <span className="textsec">skills</span>
  </h1>

  <div className="flex flex-wrap gap-6 justify-center max-w-4xl mx-auto p-6">
    {Skillss.map((skill, idx) => (
      <div
        key={idx}
        className="px-6 py-2 bg-gradient-to-r from-indigo-500 via-blue-300 to-green-400 text-black rounded-full text-sm md:text-lg font-semibold shadow-md hover:scale-110 transition-transform cursor-default"
      >
        {skill.skill}
      </div>
    ))}
  </div>
</div>
  );
}
