import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";

interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  role?: "back" | "forward" | "main" | "not-found";
  icon?: React.ReactNode;
}

export function Button(props: IButtonProps) {
  const { text, role, icon } = props;

  return (
    <button
      className="flex items-center font-bold outline-none pt-4 pb-4 pl-8 pr-8 rounded-xl bg-gray-200 text-black"
      {...props}
    >
      {text}
      <div className="m-2">
        {/* {role === "forward" && <HiOutlineArrowNarrowRight />}
        {role === "back" && <HiOutlineArrowNarrowLeft />} */}
        {icon}
      </div>
    </button>
  );
}

export function Good() {
  return (
    <div className="flex space-x-10">
      <Button
        text="Go Home"
        // role="forward"
        icon={<HiOutlineArrowNarrowRight />}
      />
      <Button
        text="Go Back"
        // role="back"
        icon={<HiOutlineArrowNarrowLeft />}
      />
    </div>
  );
}
