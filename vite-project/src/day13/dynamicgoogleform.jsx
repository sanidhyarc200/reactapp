import { useState } from "react";

export const GoogleForm = () => {
  const [getSelectPlace, setSelect] = useState(""); //placeholder
  const [inputField, setInputField] = useState([]); //input fiels jo hum bna rahe hai
  const [showResult, setShowResult] = useState([]);
  const [dropdown, setdropdown] = useState(""); //for maintain dropdown
  const [capture, setCapture] = useState("");
  const generate = () => {
    {
      setInputField((lastState) => [
        ...lastState,
        {
          id: new Date().getTime(),
          type: dropdown,
          placeholder: getSelectPlace,
        },
      ]);
    }
  };
  console.log("SK@21", inputField);
  const updateArr = (grab, ids) => {
    setCapture(grab);
    // console.log("SK@", inputField[0].id, ids);
    inputField.map((smt) => {
      console.log("SK3256@", smt);
      if (smt.id == ids) {
        smt.data = capture;
      }
    });
  };
  const showMe = () => {
    setShowResult(inputField);
  };
  console.log("SK@ff", showResult);
  return (
    <>
      <select value={dropdown} onChange={(e) => setdropdown(e.target.value)}>
        <option value="text">Text Field</option>
        <option value="password">Password</option>
        <option value="date">Dob</option>
      </select>

      <input
        name="placeHolder"
        value={getSelectPlace}
        onChange={(e) => setSelect(e.target.value)}
      />
      <button onClick={generate}>Create</button>
      {inputField.map((item) => {
        return (
          <input
            type={item.type}
            key={item.id}
            placeholder={item.placeholder}
            onChange={(e) => {
              updateArr(e.target.value, item.id);
            }}
          />
        );
      })}
      <button onClick={showMe}>Submit</button>
      {showResult.map((item) => {
        return <li key={item.key}>{item.data}</li>;
      })}
    </>
  );
};

