import { BsLinkedin, BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";

const SocialMediaLinks = () => {
  return (
    <div className="flex items-cente gap-5  md:gap-8 md:-ml-600 -ml-[220px] mt-5">
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
  );
};

export default SocialMediaLinks;
