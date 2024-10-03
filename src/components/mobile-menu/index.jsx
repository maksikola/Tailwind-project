import Button from "../button";
import { COMPANY, FEATURES } from "../header/constants";
import MenuItem from "../menu-item";
import NavItem from "../nav-item";

const MobileMenu = ({ isOpen = false }) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bg-almost-black opacity-50 z-10 h-screen ${
          isOpen ? "flex" : "hidden"
        }`}
      ></div>
      <div
        className={`fixed right-0 top-0 w-1/2 bg-white z-20 justify-center h-screen ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <nav className="my-20 mx-5 space-y-5 text-lg w-full">
          <NavItem text="Features">
            <div className="flex-col p-2">
              {FEATURES.map(({ text, icon }) => (
                <MenuItem text={text} icon={icon} key={text} />
              ))}
            </div>
          </NavItem>
          <NavItem text="Company">
            <div className="flex-col p-2">
              {COMPANY.map(({ text, icon }) => (
                <MenuItem text={text} icon={icon} key={text} />
              ))}
            </div>
          </NavItem>
          <NavItem text="Careers"/>
          <NavItem text="About"/>
          <div className="flex flex-col">
            <Button>Loggin</Button>
            <Button hasBorder={ true }>Register</Button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
