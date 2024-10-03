import { ArrowDown, ArrowUp } from "@phosphor-icons/react";
import { useState } from "react";

const NavItem = ({ text = "", children }) => {
  const [selected, setSelected] = useState("");
  return (
    <div className="relative">
      <div className="flex space-x-2 cursor-pointer items-center">
        <span
          className="text-medium-gray hover:text-almost-black"
          onClick={() => children && setSelected(text !== selected ? text: '')}
        >
          {text}
        </span>
       { children && selected !== text && <ArrowDown size={16} />}
       { children && selected === text && <ArrowUp size={16} />}
      </div>
      { selected && children}
    </div>
  );
};

export default NavItem;
