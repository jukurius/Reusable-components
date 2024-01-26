import styles from "@styles/skeleton-component.module.css";

interface SkeletonComponentProps {
  width: string;
  height: string;
  theme?: string;
  margin?: string;
  borderRadius?: string;
}

const SkeletonComponent = ({
  width,
  height,
  theme,
  margin,
  borderRadius,
}: SkeletonComponentProps) => {
  return (
    <div
      className={`${styles.skeleton} ${theme ? styles[theme] : ""}`}
      style={{ width, height, margin, borderRadius }}
    ></div>
  );
};

export default SkeletonComponent;
