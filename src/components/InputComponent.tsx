import { ChangeEvent, ReactNode } from "react";
import styles from "@styles/input-component.module.css";

// Define the possible input types
type InputType = "text" | "password" | "number" | "email";

interface InputProps {
  type?: InputType;
  label?: ReactNode;
  value: string | number;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  labelClassName?: string;
  inputClassName?: string;
  name?: string;
}

const InputComponent = ({
  type = "text",
  label,
  value,
  onChange,
  placeholder,
  disabled = false,
  labelClassName,
  inputClassName,
  name,
}: InputProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={`${styles.reusable_input_container}`}>
      {label && (
        <label
          htmlFor={name && name}
          className={`${styles.reusable_input_label} ${
            labelClassName ? styles[labelClassName] : ""
          }`}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        name={name && name}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`${styles.reusable_input_input} ${
          inputClassName ? styles[inputClassName] : ""
        }`}
      />
    </div>
  );
};

export default InputComponent;
