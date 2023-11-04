import { BiCodeAlt } from "react-icons/bi";
import * as Dropdown from "./dropdown";
import { FaDraftingCompass, FaPager } from "react-icons/fa";

export function DropdownGOOD() {
  return (
    <Dropdown.Dropdown>
      <Dropdown.Button>Create +</Dropdown.Button>
      <Dropdown.List>
        <Dropdown.Item icon={<BiCodeAlt />}>
          New Project
        </Dropdown.Item>
        <Dropdown.Item icon={<FaDraftingCompass />}>
          New Draft
        </Dropdown.Item>
        <Dropdown.Item icon={<FaPager />}>New Page</Dropdown.Item>
        {/* You can easily customized it however you want while the dropdown building blocks are still the same */}
        {/* <span className="px-1 text-xs text-gray-400 leading-5">
          All projects will be auto saved
        </span> */}
      </Dropdown.List>
    </Dropdown.Dropdown>
  );
}
