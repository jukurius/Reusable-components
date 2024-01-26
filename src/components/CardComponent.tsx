import { ReactNode } from "react";
import styles from "@styles/card-component.module.css";
import SkeletonComponent from "./SkeletonComponent";

interface CardProps {
  title: ReactNode | string;
  imageUrl?: string;
  imageAlt?: string;
  children: ReactNode;
  isLoading?: boolean;
}
const CardComponent = ({
  title,
  imageUrl,
  imageAlt,
  isLoading,
  children,
}: CardProps) => {
  return (
    <div className={`${styles.card_container}`}>
      {imageUrl && isLoading ? (
        <SkeletonComponent
          width="100%"
          height="180px"
          borderRadius="8px 8px 0 0"
        />
      ) : (
        <img
          className={`${styles.card_img}`}
          src={imageUrl}
          alt={imageAlt ? imageAlt : ""}
        />
      )}
      <div className={`${styles.card_text_container}`}>
        {isLoading ? (
          <SkeletonComponent width="60%" height="22px" margin="1px 0 5px" />
        ) : (
          <h2 className={`${styles.card_title}`}>{title}</h2>
        )}
        {isLoading ? (
          <SkeletonComponent width="100%" height="40px" />
        ) : (
          <div className={`${styles.card_content}`}>{children}</div>
        )}
      </div>
    </div>
  );
};

export default CardComponent;
