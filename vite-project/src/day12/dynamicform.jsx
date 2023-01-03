// import { useState } from "react";
// const Fun = () => {
//     const[input, setInput] = useState([]);
//     return(
//         <>
//         <label htmlFor="text"> Enter the field : 
//         <input type="text" />
//         </label>
//         <form>
//         <select >
//             <option value="">Select a value</option>
//           <option value="name">Name</option>
//           <option value="Password">Password</option>
//           <option value="Age">Age</option>
//         </select>
//         <label htmlFor="">placeholder 
//         <input type="placeholder" />

//         </label>
//       </form>
//       </>
//     )

// }


import { useState } from "react";
    const GetForm = () => {
  const [getSelectPlace, setSelect] = useState("");
  const [inputField, setInputField] = useState([]);
  const [dropdown, setdropdown] = useState("");
  const generate = () => {
    if (dropdown === "Dob") {
      const newField = <input type={Date} placeholder={getSelectPlace} />;
      setInputField(newField);
    }
    console.log("SK@", getSelectPlace);
  };
  return (
    <>
    
      <select value={dropdown} onChange={(e) => setdropdown(e.target.value)}>
        <option>Text Field</option>
        <option>Password</option>
        <option>Dob</option>
      </select>
      <input
        name="placeHolder"
        value={getSelectPlace}
        onChange={(e) => setSelect(e.target.value)}
      />
      <p>
        {dropdown}
        {getSelectPlace}
      </p>
      <button onClick={generate()}>Create</button>
      <p>{inputField}</p>
    </>
  );
};

export default GetForm;