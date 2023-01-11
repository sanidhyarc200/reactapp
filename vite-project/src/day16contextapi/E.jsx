import { useContext } from "react";
import { userProfileContext } from "./A";

const E = () => {
  const userName = useContext(userProfileContext);
  console.log("E: re-render");
  return (
    <>
      <p>I'm E Component {userName}</p>
    </>
  );
};

export default E;