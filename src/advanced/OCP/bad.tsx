import React, { useState } from "react";
import { BiCodeAlt } from "react-icons/bi";
import {
  FaFileCode,
  FaDraftingCompass,
  FaPager,
} from "react-icons/fa";

function DropdownItem({ hideIcon, icon, name, description }) {
  return (
    <div className="flex items-center px-2 py-2 cursor-pointer hover:bg-slate-200 transition-all">
      {!hideIcon && (
        <div className="flex items-center justify-center text-2xl bg-gray-100 text-blue-500 w-7 h-7 rounded-md p-1.5 mr-2">
          {icon}
        </div>
      )}
      <div className="flex flex-col">
        <span className="font-bold">{name}</span>
        <p className="text-xs text-gray-400">{description}</p>
      </div>
    </div>
  );
}

interface DropdownProps {
  title: string;
  items: any[];
  hideIcons?: boolean;
}

export function Dropdown(props: DropdownProps) {
  const { title, items, hideIcons } = props;
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        type="button"
        className="px-4 py-2 bg-blue-500 text-white rounded focus:outline-none focus:bg-blue-600"
      >
        {title}
      </button>

      {isDropdownOpen && (
        <div className="origin-top-left absolute left-0 mt-2 w-48 bg-white border border-blue-400 rounded shadow-lg text-black">
          {items.map((item, index) => (
            <DropdownItem
              key={index}
              {...item}
              hideIcon={hideIcons}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function DropdownBAD() {
  const items = [
    {
      icon: <BiCodeAlt />,
      name: "New Project",
      description: "Kickoff a new project",
    },
    {
      icon: <FaDraftingCompass />,
      name: "New Draft",
      description: "Unleash your skills",
    },
    {
      icon: <FaPager />,
      name: "New Page",
      description: "Start simple",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <Dropdown title="Create +" items={items} hideIcons={false} />
    </div>
  );
}
