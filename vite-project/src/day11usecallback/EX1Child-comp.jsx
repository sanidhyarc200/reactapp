import { memo } from "react";

const ChildComp = (props) => {
    console.log("child Re-render");
    return(
        <>
        <button onClick={props.onClick}>Increment Counter 1</button>
        <p>{props.counter}</p>
        </>
    );
};
export default memo(ChildComp);