// import { useState } from "react";

// const FirstFC = () => {
//   const [userName, setUserName] = useState("");

//   return (
//     <div>
//       <input
//         type="text"
//         value={userName}
//         onChange={(e) => setUserName(e.target.value)}
//       />
//       <p>Name: {userName}</p>
//     </div>
//   );
// };

// export default FirstFC;

const MyFunc = () =>{
    cosnt [Username, setUserName] = UseState("");
    return(
        <div>
            <input type="text" value={userName} 
            onChange={(e) => setUserName(e.target.value)}/>
        <p>Name: {Username}</p>
        </div>
    )
};
export default MyFunc