import { CircularProgressbarWithChildren as CircularProgress } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

/**
 * @param {*} props
 * @returns progress bar
 * @docs https://www.npmjs.com/package/react-circular-progressbar
 */

export const ProgressCircle = (props) => {
  const { containerClassName, text, value, pathStyle, children, ...rest } =
    props;

  return (
    <div style={{ width: 140, height: 140 }} className={containerClassName}>
      <CircularProgress
        value={value}
        {...rest}
        styles={{
          path: pathStyle,
          trail: {
            stroke: "#FFFFFF",
          },
        }}
      >
        {children}
      </CircularProgress>
    </div>
  );
};
