
import { memo, useMemo } from "react";

const Button = ({ color, children, label }) => {
  console.log("SK@", color);
  const btnColor = useMemo(() => {
    let result = "gray";
    switch (color) {
      case "primary":
        return "blue";
      case "success":
        return "gray";
      case "info":
        return "green";
      case "warning":
        return "yellow";
      case "danger":
        return "red";
      case "link":
        return "white";
      default:
        return "gray";
    }
  }, [color]);

  return (
    <button
      style={{
        backgroundColor: btnColor,
        color: "white",
        padding: "10px",
        border: "none",
      }}
    >
      {children}
    </button>
  );
};
export default memo(Button);