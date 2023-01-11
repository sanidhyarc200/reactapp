import E from "./E";

const D = () => {
  console.log("D: re-render");
  return (
    <>
      <p>I'm D Component</p>
      <E />
    </>
  );
};

export default D;