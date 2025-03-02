import { useEffect } from "react";
import aboutImg from "../assets/images/about.jpg";
import { useDarkMode } from "../components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <section
      id="about"
      className={`${
        darkMode ? "dark bg-black" : "light bg-transparent"
      } w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10`}
    >
      <div>
        <img
          data-aos="zoom-in"
          src={aboutImg}
          alt="about image"
          className="rounded-2xl lg:w-[500px] lg:h-[600px]"
        />
      </div>
      <div className="flex flex-col justify-center items-start gap-8">
        <h1 data-aos="zoom-in" className="text-red-500 dark:text-white uppercase text-xl">
          Who we are
        </h1>
        <h1
          data-aos="zoom-in"
          data-aos-delay="200"
          className="text-black text-[40px] font-semibold leading-10 dark:text-white"
        >
          {" "}
          Guests can choose from a variety of accommodations.
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-delay="400"
          className="text-gray-600 text-xl dark:text-white text-justify"
        >
          including Presidential Suites, Royal Suites, and Honeymoon Suites,
          catering to different preferences. The hotel also features premium
          facilities such as a swimming pool, spa, steam bath, and an open-air
          bar, ensuring a relaxing and enjoyable stay
        </p>
        <button className="bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4 text-white uppercase font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300">
          read more
        </button>
      </div>
    </section>
  );
};

export default About;
