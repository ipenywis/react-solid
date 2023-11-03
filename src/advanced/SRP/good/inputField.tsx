import { UseFormRegisterReturn } from "react-hook-form";

interface FormFieldProps
  extends React.HTMLAttributes<HTMLInputElement> {
  labelText: string;
  fieldRegister: UseFormRegisterReturn;
  error?: string;
}

export function InputField(props: FormFieldProps) {
  const { labelText, fieldRegister, error, ...restProps } = props;

  return (
    <div className="flex flex-col mb-4">
      <label className="text-left font-bold">{labelText}</label>
      <input
        className="rounded-sm h-8 p-4"
        type="text"
        {...restProps}
        {...fieldRegister}
      />
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
}
