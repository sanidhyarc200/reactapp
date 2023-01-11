import { useContext } from "react";
import { userProfileContext } from "./A";
import D from "./D";

const C = () => {
  const userName = useContext(userProfileContext);
  console.log("C: re-render");
  return (
    <>
      <p>I'm C Component {userName}</p>
      <D />
    </>
  );
};

export default C;
 13  