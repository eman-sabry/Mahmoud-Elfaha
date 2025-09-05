import { FaFacebook, FaSquareInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6";
import ReactTypingEffect from 'react-typing-effect';

export default function Home() {
  return (
    <>
      <div className="bgc flex flex-col md:flex-row items-center justify-center md:justify-between text-white px-4 md:px-6 py-20 md:py-20 gap-2 min-h-screen max-h-screen overflow-hidden">

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left px-4 md:px-16">
          <div data-aos="fade-down">
            <h1 className="text-4xl md:text-5xl font-bold">Welcome to My Portfolio</h1>
          </div>

          <br />

          <div data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg">
              I’m{' '}
              <span className="textsec">
                <ReactTypingEffect
                  text={["Mahmoud Elfaham"]}
                  speed={100}
                  eraseDelay={1000000000}  
                  eraseSpeed={0}
                  cursor="|"
                />
              </span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-medium mb-6 drop-shadow-lg">
              Data Analyst & Visualization Specialist
            </h2>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-5 ">
              <a target="_blank" rel="noopener noreferrer" data-aos="fade-left" href="https://www.instagram.com/mahmoud_elfaham2/">
                <FaSquareInstagram className="text-2xl" />
              </a>
              <a href="mailto:mahmoudelfaham50@gmail.com" rel="noopener noreferrer" data-aos="fade-left">
                <FaEnvelope className="text-2xl" />
              </a>
              <a target="_blank" rel="noopener noreferrer" data-aos="fade-left" href="https://www.linkedin.com/in/mahmoud-elfaham-728249241/">
                <FaLinkedin className="text-2xl" />
              </a>
              <a target="_blank" rel="noopener noreferrer" data-aos="fade-left" href="https://github.com/Elfahhham">
                <FaGithub className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 justify-center relative hidden md:flex" data-aos="fade-up">
          <div className="absolute top-1/2 left-1/2 w-[25rem] sm:w-[30rem] md:w-[40rem] h-[25rem] sm:h-[30rem] md:h-[40rem] md:mt-40 rounded-full z-0 bg-green-300 blur-3xl opacity-50 transform -translate-x-1/2 -translate-y-1/2"></div>
          <img
            src="img/IMG-20241129-WA23(2).png"
            alt="Laptop showing code"
            className="max-w-none w-[50rem] sm:w-[50rem] md:w-[80rem] lg:w-[100rem] h-auto object-contain relative z-10"
          />
        </div>

      </div>
    </>
  );
}
