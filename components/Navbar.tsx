import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const Navbar = () => {
  const [activeItem, setActiveItem] = React.useState<string>("");
  const { pathname } = useRouter();

  const NavItem: React.FC<{
    activeItem: string;
    setActiveItem: Function;
    name: string;
    route: string;
  }> = ({ activeItem, setActiveItem, name, route }) => {
    return activeItem !== name ? (
      <Link href={route}>
        <a>
          <span onClick={() => setActiveItem(name)} className="hover:text-blue">{name}</span>
        </a>
      </Link>
    ) : null;
  };

  useRouter();
  React.useEffect(() => {
    switch (pathname) {
      case "/":
        setActiveItem("About");
      case "/projects":
        setActiveItem("Projects");
      case "/resume":
        setActiveItem("Resume");
      default:
        setActiveItem("About");
    }
  }, []);

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold border-b-4 text-blue border-blue md:text-2xl">{activeItem}</span>
      <div className="flex space-x-3 text-lg">
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="About"
          route="/"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Projects"
          route="/projects"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Resume"
          route="/resume"
        />
      </div>
    </div>
  );
};

export default Navbar;
