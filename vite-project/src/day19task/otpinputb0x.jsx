// import React, { Component, ReactDOM } from 'react';
// import Button from 'react-bootstrap/Button';
// class Otpinput extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = { value: '', otp1: "", otp2: "", otp3: "", otp4: "", otp5: "", disable: true };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);

//   }

//   handleChange(value1, event) {

//     this.setState({ [value1]: event.target.value });
//   }

//   handleSubmit(event) {

//     const data = new FormData(event.target);
//     console.log(this.state);
//     event.preventDefault();
//   }

//   inputfocus = (elmnt) => {
//     if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
//       const next = elmnt.target.tabIndex - 2;
//       if (next > -1) {

//         elmnt.target.form.elements[next].focus()
//       }
//     }
//     else {
//       console.log("next");
     
//         const next = elmnt.target.tabIndex;
//         if (next < 5) {
//           elmnt.target.form.elements[next].focus()
//         }
//     }

//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <div className="otpContainer">

//           <input
//             name="otp1"
//             type="text"
//             autoComplete="off"
//             className="otpInput"
//             value={this.state.otp1}
//             onKeyPress={this.keyPressed}
//             onChange={e => this.handleChange("otp1", e)}
//             tabIndex="1" maxLength="1" onKeyUp={e => this.inputfocus(e)}

//           />
//           <input
//             name="otp2"
//             type="text"
//             autoComplete="off"
//             className="otpInput"
//             value={this.state.otp2}
//             onChange={e => this.handleChange("otp2", e)}
//             tabIndex="2" maxLength="1" onKeyUp={e => this.inputfocus(e)}

//           />
//           <input
//             name="otp3"
//             type="text"
//             autoComplete="off"
//             className="otpInput"
//             value={this.state.otp3}
//             onChange={e => this.handleChange("otp3", e)}
//             tabIndex="3" maxLength="1" onKeyUp={e => this.inputfocus(e)}

//           />
//           <input
//             name="otp4"
//             type="text"
//             autoComplete="off"
//             className="otpInput"
//             value={this.state.otp4}
//             onChange={e => this.handleChange("otp4", e)}
//             tabIndex="4" maxLength="1" onKeyUp={e => this.inputfocus(e)}
//           />

//           <input
//             name="otp5"
//             type="text"
//             autoComplete="off"
//             className="otpInput"
//             value={this.state.otp5}
//             onChange={e => this.handleChange("otp5", e)}
//             tabIndex="5" maxLength="1" onKeyUp={e => this.inputfocus(e)}
//           />
//         </div>
//         <Button className="primary" type="submit">
//           Submit otp
//         </Button>
//       </form>
//     );
//   }
// }


// export default Otpinput;
import { useEffect, useRef, useState } from "react";

export const OTPfunctionality = () => {
  const inputRef1 = useRef([]);
  //   const inputRef2 = useRef(null);
  //   const inputRef3 = useRef(null);
  const [inputData, setInputData] = useState([]);

  //   console.log("SK@");
  //   const nextInput = (e) => {
  //     console.log("SK@", inputRef2.current.focus());
  //     setInputData((pre) => [...pre, inputRef1.current.value]);
  //   };
  //   const nextInput1 = (e) => {
  //     console.log("SK@", inputRef3.current.focus());
  //     setInputData((pre) => [...pre, inputRef1.current.value]);
  //   };
  //   console.log("SK@", inputData);

  const handler = (idx) => {
    inputRef1.current[1].focus();
    for (let i of inputRef1.current) {
      console.log("SK@forloop", i.value);
    }
  };

  console.log("SK@", inputRef1.current);
  //   const refs = (ref) => {
  //     // inputRef1.current.push(ref);
  //     console.log("SK@", inputRef1.current.value);
  //   };
  return (
    <>
      <input
        type="number"
        ref={(el) => (inputRef1.current[0] = el)}
        onChange={handler}
      />
      <input
        type="number"
        ref={(el) => (inputRef1.current[1] = el)}
        onChange={handler}
      />
      <input
        type="number"
        ref={(el) => (inputRef1.current[2] = el)}
        onChange={handler}
      />
    </>
  );
};