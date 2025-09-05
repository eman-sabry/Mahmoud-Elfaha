import React from "react";
import {
  Navbar,
  Collapse,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";


// Navigation links
const navLinks = [
  { title: "Home", path: "Home" },
  { title: "About", path: "About" },
  { title: "Skills", path: "Skills" },
  { title: "Projects", path: "Projects" },

];

// Navigation list component
function NavList({ vertical = false }) {
  return (
    <ul
      className={`flex ${
        vertical ? "flex-col gap-4" : "flex-row gap-6"
      } items-start lg:items-center`}
    >
      {navLinks.map((item, index) => (
        <li key={index}>
          <Link
            data-aos="fade-down"
              data-aos-delay="500"
            to={item.path}
            smooth={true} 
            duration={500} 
            className="text-white text-lg font-bold hover:text-light-blue-900 transition-colors cursor-pointer"
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

// Header component
export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <Navbar
    data-aos="fade-down"
    data-aos-delay="200"
      className="bgch shadow-none border-none fixed top-0 left-0 right-0 z-50 px-6 py-3 p-5 rounded-none min-w-full"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-10">
         <h1 className="text-white text-3xl sm:text-4xl mr-10 font-extrabold leading-tight  drop-shadow-lg">
          portfolio
         </h1>
           <div className="hidden lg:flex">
            <NavList />
          </div>
          
        </div>

        <div className="flex items-center gap-3">
            <div className="flex justify-center" data-aos="zoom-in" data-aos-delay="500">
            <a
              href="Mahmou Elfaham Data Analysis.pdf"
              download
              className=" inline-block px-3 py-1 btnbc text-sm md:text-lg text-gray-900 font-semibold rounded-xl hover:bg-indigo-700 hover:text-white transition duration-300"
            >
              Download CV
            </a>
          </div>
          <IconButton
            variant="text"
            className="lg:hidden text-white"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        
      </div>

      <Collapse open={openNav}>
        <div className="px-4 py-4">
          <NavList vertical={true} />
        </div>
      </Collapse>
    </Navbar>
  );
}