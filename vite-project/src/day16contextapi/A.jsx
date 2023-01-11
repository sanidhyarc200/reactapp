import { createContext, useState } from "react";
import B from "./B";

export const userProfileContext = createContext(null);
const UserProfileProvider = userProfileContext.Provider;

const AFix = () => {
  const [userName, setUserName] = useState("");
  console.log("A: re-render");
  return (
    <UserProfileProvider value={userName}>
      <div>
        <div style={{ background: "lightgreen", padding: 12 }}>
          <p>I'm A Component</p>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <B />
      </div>
    </UserProfileProvider>
  );
};

export default AFix;