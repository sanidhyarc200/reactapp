import C from "./C";

const B = () => {
  console.log("B: re-render");
  return (
    <>
      <p>I'm B Component</p>
      <C />
    </>
  );
};

export default B;