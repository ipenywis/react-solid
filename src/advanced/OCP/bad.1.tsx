import React, { useState } from "react";
import { BiCodeAlt } from "react-icons/bi";
import {
  FaFileCode,
  FaDraftingCompass,
  FaPager,
} from "react-icons/fa";

export function DropdownBAD() {
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
        Create +
      </button>

      {isDropdownOpen && (
        <div className=" origin-top-left absolute left-0 mt-2 w-48 bg-white border border-blue-400 rounded shadow-lg text-black">
          <div>
            <div className="flex items-center px-2 py-2 cursor-pointer hover:bg-slate-200 transition-all">
              <div className="flex items-center justify-center text-2xl bg-gray-100 text-blue-500 w-7 h-7 rounded-md p-1.5 mr-2">
                <BiCodeAlt />
              </div>
              <div className="flex flex-col">
                <span className="font-bold">New Project</span>
                <p className="text-xs text-gray-400">Description</p>
              </div>
            </div>
            <div className="flex items-center px-2 py-2 cursor-pointer hover:bg-slate-200 transition-all">
              <div className="flex items-center justify-center text-2xl bg-gray-100 text-blue-500 w-7 h-7 rounded-md p-1.5 mr-2">
                <FaDraftingCompass />
              </div>
              <div className="flex flex-col">
                <span className="font-bold">New Draft</span>
                <p className="text-xs text-gray-400">Description</p>
              </div>
            </div>
            <div className="flex items-center px-2 py-2 cursor-pointer hover:bg-slate-200 transition-all">
              <div className="flex items-center justify-center text-2xl bg-gray-100 text-blue-500 w-7 h-7 rounded-md p-1.5 mr-2">
                <FaPager />
              </div>
              <div className="flex flex-col">
                <span className="font-bold">New Page</span>
                <p className="text-xs text-gray-400">Description</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
