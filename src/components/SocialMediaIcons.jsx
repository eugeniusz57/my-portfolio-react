import linkedInIcon from "../assets/linkedin.png";
import gitHub from "../assets/gitHub.png";
import facebook from "../assets/facebook.png";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/yevhenii-kavetskyi/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedInIcon} alt="linkedIn icon" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/eugeniusz57 "
        target="_blank"
        rel="noreferrer"
      >
        <img className="h-8 w-8" src={gitHub} alt="gitHub icon" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/yevhenii.kavetskiy"
        target="_blank"
        rel="noreferrer"
      >
        <img src={facebook} alt="facebook icon" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
