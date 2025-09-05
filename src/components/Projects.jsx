import { useEffect, useState } from 'react';
import axios from 'axios';
export default function Projects() {
  const [projectss, setProjects] = useState([]);

  useEffect(() => {
    axios.get('https://api.sheetbest.com/sheets/b1469fc4-5281-4d84-9484-cda348c31837') 
      .then((res) => {
        console.log(res.data);
        setProjects(res.data);
      });
  }, []);
  return (
    <div className="px-4 sm:px-8 md:px-12 py-10 flex flex-col justify-center items-center min-h-screen">
      <h1
        data-aos="fade-left"
        className="text-white text-4xl sm:text-5xl font-extrabold leading-tight mb-10 drop-shadow-lg text-center"
      >
        My <span className="textsec">Projects</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
     {projectss.map((project, index) => (
  <div
    data-aos="fade-up"
    key={index}
    className="relative group rounded-lg overflow-hidden shadow-lg bg-gray-800"
  >
    <img
      src={project.Image}
      alt={project.Title}
      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="p-4">
      <h3 className="text-lg sm:text-xl text-white font-bold">{project.Title}</h3>
      <p className="text-sm text-gray-300 mt-2">{project.Description}</p>
    </div>
    <a
      href={project.Link}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-base sm:text-lg font-semibold transition-opacity"
    >
      🔗 View Project
    </a>
  </div>
))}

      </div>
    </div>
  );
}
