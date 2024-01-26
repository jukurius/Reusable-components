import styles from "@styles/link-component.module.css";
import { CSSProperties } from "react";
import { Link } from "react-router-dom";

interface LinkComponentProps {
  href: string;
  text: string;
  className?: string;
  style?: CSSProperties;
}

const LinkComponent = ({
  href,
  text,
  className,
  style,
}: LinkComponentProps) => {
  return (
    <Link
      to={href}
      className={`${styles.link_component} ${
        className ? styles[className] : ""
      }`}
      style={style ? style : {}}
    >
      {text}
    </Link>
  );
};

export default LinkComponent;
