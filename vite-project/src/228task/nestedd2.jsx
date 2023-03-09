import { useMemo, useState } from "react";

const NodeItem = ({ nodes, index }) => {
  const [visibleTest, setVisibleTest] = useState(false);

  const onNodeToggle = (e) => {
    console.log(e);
    e.stopPropagation();
    setVisibleTest((visible) => !visible);
  };

  const hasChilden = useMemo(() => nodes.children && nodes.children.length);

  return (
    <li onClick={onNodeToggle}>
      <div>
        {!!hasChilden}
        <p>{nodes.text}</p>
      </div>
      {hasChilden > 0 && visibleTest && (
        <ul>
          {nodes.children.map((item, index) => {
            return <NodeItem nodes={item} key={index} />;
          })}
        </ul>
      )}
    </li>
  );
};
export default NodeItem;