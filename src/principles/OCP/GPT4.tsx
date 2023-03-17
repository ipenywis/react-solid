import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";

interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  renderIcon?: () => React.ReactNode;
}

export function Button(props: IButtonProps) {
  const { text, renderIcon, ...otherProps } = props;

  return (
    <button
      className="flex items-center font-bold outline-none pt-4 pb-4 pl-8 pr-8 rounded-xl bg-gray-200 text-black"
      {...otherProps}
    >
      {text}
      <div className="m-2">{renderIcon && renderIcon()}</div>
    </button>
  );
}

export function GPT4() {
  return (
    <div className="flex space-x-10">
      <Button
        text="Go Home"
        renderIcon={() => <HiOutlineArrowNarrowRight />}
      />
      <Button
        text="Go Back"
        renderIcon={() => <HiOutlineArrowNarrowLeft />}
      />
    </div>
  );
}
