// import { useState } from "react";
// import ChildComponentNest from "./child";
//  const ParentComponent = () => {
//   const [nestedData] = useState([
//     {
//       text: "eee",
//       children: [
//         {
//           text: "123",
//           children: [
//             {
//               text: "rew",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       text: "comment4",
//       children: [],
//     },
//     {
//       text: "comment5",
//       children: [
//         {
//           text: "123",
//           children: [
//             {
//               text: "rew",
//               children: [
//                 {
//                   text: "123",
//                   children: [
//                     {
//                       text: "rew",
//                     },
//                   ],
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//   ]);
//   const [showList, setShowList] = useState(false);
//   const toggleNestList = () => {
//     setShowList((pre) => !pre);
//   };
//   return (
//     <ul>
//       {nestedData.map((item) => (
//         <li onClick={toggleNestList}>
//           {item.text}
//           {showList && <ChildComponentNest props={item.children} />}
//         </li>
//       ))}
//     </ul>
//   );
// };
// export default ParentComponent;
import { useState } from "react";
import NodeItem from "./nestedd2";

const NodeListComment = () => {
  const [nodes, setNodes] = useState([
    {
      text: "eee",
      children: [
        {
          text: "123",
          children: [
            {
              text: "rew",
            },
          ],
        },
      ],
    },
    {
      text: "comment4",
      children: [],
    },
    {
      text: "comment5",
      children: [
        {
          text: "123",
          children: [
            {
              text: "rew",
              children: [
                {
                  text: "123",
                  children: [
                    {
                      text: "rew",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div>
      <ul>
        {nodes.map((item, index) => {
          return <NodeItem nodes={item} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default NodeListComment;