import { BsLinkedin, BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";

const Home = () => {
  return (
    <div
      className="flex flex-col -mt-10 md:mt-5 items-center justify-center"
      style={{ fontFamily: "Noto Serif, serif" }}
    >
      <h1 className=" font-bold text-5xl w-[480px] md:w-760 mt-24 ">
        Software Developer, specialized in Frontend Development.
      </h1>
      <p className=" w-480 md:w-760 font-extralight mt-4">
        I'm <span className=" font-extrabold">Tomiwa</span>, a experienced
        full-stack software developer who specializes in developing frontend
        applications with the best tools.I've worked on various teams and I'm
        currently building a solution for solving job sourcing problems for
        Nigerians.
      </p>
      {/* social media */}
      <div className="flex items-center gap-8 md:-ml-600 -ml-310 mt-5">
        <a
          href="https://github.com/tomiwakukoyi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub className="cursor-pointer" />
        </a>
        <a
          href="https://linkedin.com/in/tomiwakukoyi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin className="cursor-pointer" />
        </a>
        <a
          href="https://instagram.com/the.tommyk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram className="cursor-pointer" />
        </a>
        <a
          href="https://twitter.com/thetommyk_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsTwitter className="cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default Home;
