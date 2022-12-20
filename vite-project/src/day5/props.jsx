// import { Component } from "react";

import { Component } from "react";

const card = {
  padding: 12,
  backgroundColor: "white",
};
// class AppV1CC extends Component {
//   render() {
//     return (
//       <div style={card}>
//         <p>
//           My name is {this.props.name} and I'm from {this.props.city || "Berlin"}
//         </p>
//       </div>
//     );
//   }
// }
// export default AppV1CC;

class AppV1CC extends Component{
    render(){
        return(
            <div style={card}>
                <p>my name is {this.props.name} and I'm from{this.props.city}</p>
            </div>
        )
    }
}
export default AppV1CC;