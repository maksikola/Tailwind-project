import { useState } from "react";
import { Aperture, List, X } from "@phosphor-icons/react";
import NavItem from "../nav-item";
import NavMenu from "../nav-menu";
import { COMPANY, FEATURES } from "./constants";
import Button from "../button";
import MobileMenu from "../mobile-menu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="flex items-center">
      <Aperture size={52} color="#4b5563" />
      <nav className="hidden xl:flex space-x-6 ml-8 items-center">
        <NavItem text="Feature">
          <NavMenu items={FEATURES} />
        </NavItem>
        <NavItem text="Company">
          <NavMenu items={COMPANY} />
        </NavItem>
        <NavItem text="Careers" />
        <NavItem text="About" />
      </nav>
      <div className="hidden xl:flex ml-auto space-x-5">
        <Button> Login </Button>
        <Button hasBorder={true}> Register </Button>
      </div>
      <div
        className="flex xl:hidden ml-auto cursor-pointer z-30"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="w-10 h-10" /> : <List className="w-10 h-10" /> }
      </div>
      <MobileMenu isOpen={isMobileMenuOpen}/>
    </header>
  );
};

export default Header;
