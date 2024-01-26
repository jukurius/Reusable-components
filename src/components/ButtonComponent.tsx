import styles from "@styles/button-component.module.css";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  // Custom properties goes here..
  disabled?: boolean;
  value: string;
  className?: string;
  action: () => void;
}

const ButtonComponent = ({
  disabled,
  value,
  className,
  action,
  ...props
}: ButtonProps) => {
  const handleButtonClick = () => {
    action();
  };

  return (
    <button
      {...props}
      disabled={disabled}
      className={`${styles.reusable_button} ${
        className ? styles[className] : ""
      }`}
      onClick={handleButtonClick}
    >
      {value}
    </button>
  );
};

export default ButtonComponent;
