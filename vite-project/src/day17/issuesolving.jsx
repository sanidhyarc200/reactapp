// import React from "react";
// import { useState } from "react";

// const Dat19PerformanceIssue = () => {
//   const [search, setSearch] = useState("");
//   const [list, setList] = useState([]);

//   const onSearch = (e) => {
//     setSearch(e.target.value);

//     const newList = [];
//     for (let i = 0; i < 200; i++) {
//       newList.push(e.target.value);
//     }

//     setList(newList);
//   };

//   return (
//     <>
//       <div>
//         <input
//           type={"text"}
//           value={search}
//           placeholder="Search here!"
//           onChange={onSearch}
//         />
//       </div>
//       <div>
//         <h1>My Search</h1>
//         <ul>
//           {list.map((item, index) => {
//             return <li key={index}>{item}</li>;
//           })}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Dat19PerformanceIssue;
// import { useState, useTransition } from "react";

// const Dat19PerformanceIssueFixed = () => {
//   const [search, setSearch] = useState("");
//   const [list, setList] = useState([]);
//   const [isPending, startTranstion] = useTransition();

//   const onSearch = (e) => {
//     setSearch(e.target.value);

   
//   };

//   return (
//     <>
//       <div>
//         <input
//           type={"text"}
//           value={search}
//           placeholder="Search here!"
//           onChange={onSearch}
//         />
//       </div>
//       <div>
//         <h1>My Search</h1>
//         <ul>
//           {isPending
//             ? "Loading"
//             : list.map((item, index) => {
//                 return <li key={index}>{item}</li>;
//               })}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Dat19PerformanceIssueFixed;

import { useEffect, useId, useState } from "react";

const UseIdExample = () => {
  const [search, setSearch] = useState("");
  const id = useId();
  const id1 = useId();
  const id2 = useId();
  const id3 = useId();

  useEffect(() => {
    console.log({ id, id1, id2, id3 });
  }, [search]);

  return (
    <>
      <div>
        <input
          type={"text"}
          value={search}
          placeholder="Search here...!"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </>
  );
};

export default UseIdExample;