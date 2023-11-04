import { createContext, useContext, useState } from "react";

const DropdownProvider = createContext<{
  isDropdownOpen: boolean;
  toggleDropdown: () => void;
}>({ isDropdownOpen: false, toggleDropdown: () => {} });

export function Dropdown(props) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <DropdownProvider.Provider
        value={{ toggleDropdown, isDropdownOpen }}
      >
        {props.children}
      </DropdownProvider.Provider>
    </div>
  );
}

export function Button(props) {
  const { children } = props;

  const { isDropdownOpen, toggleDropdown } =
    useContext(DropdownProvider);

  return (
    <button
      onClick={toggleDropdown}
      type="button"
      className="px-4 py-2 bg-blue-500 text-white rounded focus:outline-none focus:bg-blue-600"
    >
      {children}
    </button>
  );
}

export function List(props) {
  const { children } = props;

  const { isDropdownOpen, toggleDropdown } =
    useContext(DropdownProvider);

  console.log("props: ", props);

  if (!isDropdownOpen) return null;

  return (
    <div className="origin-top-left absolute left-0 mt-2 w-48 bg-white border border-blue-400 rounded shadow-lg text-black">
      {children}
    </div>
  );
}

export function Item(props) {
  const { hideIcon, icon, children, description } = props;

  return (
    <div className="flex items-center px-2 py-2 cursor-pointer hover:bg-slate-200 transition-all">
      {!hideIcon && (
        <div className="flex items-center justify-center text-2xl bg-gray-100 text-blue-500 w-7 h-7 rounded-md p-1.5 mr-2">
          {icon}
        </div>
      )}
      <div className="flex flex-col">
        <span className="font-bold">{children}</span>
        <p className="text-xs text-gray-400">{description}</p>
      </div>
    </div>
  );
}
