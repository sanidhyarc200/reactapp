import { Component } from "react";

class Header extends Component{
    state = {
        name:"",
    }
    render () {
        return (
            <>
            
            <div>
              <label>Name</label>
              <input
                value={this.state.name}
                onChange={(e) => {
                  console.log(e.target.value);
                  this.setState({ name: e.target.value });
                }}
                type={"text"}
              />
              </div>
              <div>
              <p>Name: {this.state.name}</p>
              
            </div>
            </>
        )

            
    }
}
export default Header;


// class Day1A extends Component {
//     state = {
//       search: "",
//     };
  
//     render() {
//       return (
//         <>
//           <input
//             type="text"
//             value={this.state.search}
//             onChange={(e) => {
//               this.setState({ search: e.target.value });
//             }}
//           />
//           <p>Search Key : {this.state.search}</p>
//         </>
//       );
//     }
//   }
  
  