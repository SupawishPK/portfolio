import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";

const Sidebar = () => {
  return (
    <div>
      <img
        src="https://avatars.githubusercontent.com/u/50352586?v=4"
        alt="user avatar"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="flex items-center justify-center my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-blue">Supawish</span>
        Kaewjing
      </h3>
      <p className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full">
        Web Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full "
        href=""
        download="name"
      >
        <GiTie className="w-6 h-6" />
        Download CV
      </a>
      {/* // social icon */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-blue md:w-full">
        <a target="_blank" href="https://www.facebook.com/Supawish7/">
          <AiFillFacebook className="w-8 h-8" />
        </a>
        <a target="_blank" href="https://github.com/supawish34">
          <AiFillGithub className="w-8 h-8" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/supawish-kj/">
          <AiFillLinkedin className="w-8 h-8" />
        </a>
      </div>
      {/* // address icons */}
      <div
        className="py-4 my-5 bg-gray-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Bangkok,Thailand</span>
        </div>
        <p className="flex items-center justify-center my-2">
          Supawish.kj@gmail.com
        </p>
        <p className="flex items-center justify-center my-2">(+66)938360720</p>
      </div>
      {/* email button */}
      <div className="flex items-center justify-center">
        <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-blue to-blue-400 focus:outline-none"
        onClick={()=>window.open('mailto:supawish.kj@gmail.com')}
        >
          Email Me
        </button>
      </div>
      <div className="flex items-center justify-center">
        <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-blue to-blue-400">
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
