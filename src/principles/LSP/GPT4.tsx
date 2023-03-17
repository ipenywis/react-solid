import cx from "clsx";

interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isLarge?: boolean;
  renderPrefix?: () => React.ReactNode;
}

export function Input(props: IInputProps) {
  const { value, onChange, isLarge, renderPrefix, ...restProps } =
    props;

  return (
    <div className="flex w-10/12">
      <div className="relative w-full">
        {renderPrefix && (
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            {renderPrefix()}
          </div>
        )}
        <input
          className={cx(
            "block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none",
            isLarge && "text-3xl"
          )}
          required
          value={value}
          onChange={onChange}
          {...restProps}
        />
      </div>
    </div>
  );
}

export function SearchInputGPT4(props: IInputProps) {
  const renderSearchIcon = () => (
    <svg
      aria-hidden="true"
      className="w-5 h-5 text-gray-500 dark:text-gray-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      ></path>
    </svg>
  );

  return (
    <Input
      type="search"
      id="default-search"
      placeholder="Search for the right one..."
      renderPrefix={renderSearchIcon}
      {...props}
    />
  );
}
