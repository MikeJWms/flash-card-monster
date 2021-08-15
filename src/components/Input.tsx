export default function Input(props: {
  label?: string;
  placeholder?: string;
  inputOnChange: (event: any) => void;
  id?: string;
  autocomplete?: boolean;
  value?: string;
}) {
  const label = props?.label ? props.label : "";
  const placeholder = props?.placeholder ? props.placeholder : "";
  const id = props?.id ? props.id : "";
  const autocomplete = props.autocomplete ? "on" : "off";
  const value = props.value ? props.value : "";

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>

      <input
        onChange={props.inputOnChange}
        type="text"
        id={id}
        autoComplete={autocomplete}
        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 pr-8 sm:text-sm border-gray-300 rounded-md"
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
}
