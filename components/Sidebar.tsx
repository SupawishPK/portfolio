import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";

const Sidebar = () => {
  return (
    <div>
      <img
        src="https://avatars.githubusercontent.com/u/50352586?v=4"
        alt="user avatar"
      />
      <h3>
        <span>Beer</span>
        Supawish
      </h3>
      <p>Web Developer</p>
      <p>Download CV</p>
      {/* // social icon */}

      {/* // address icons */}
      <div>
        <div>
          <span>Bangkok,Thailand</span>
        </div>
        <p>Supawish.kj@gmail.com</p>
        <p>(+66)938360720</p>
      </div>
      {/* email button */}
      <button>Email Me</button>
      <button>Toggle Theme</button>
    </div>
  );
};

export default Sidebar;
