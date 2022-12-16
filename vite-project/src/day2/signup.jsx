import { Component } from "react";

class Signup extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    textinput: "",
    showdate: "",
    myrange: "",
    hbradio: "",
    checkboxA:"",
    checkboxB:"",
  };
  render() {
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
          <label>Email</label>
          <input
            type={"email"}
            value={this.state.email}
            onChange={(e) => {
              this.setState({ email: e.target.value });
            }}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type={"password"}
            value={this.state.password}
            onChange={(e) => {
              this.setState({ password: e.target.value });
            }}
          />
        </div>
        <div>
            <label> Inputtext</label>
            <textarea value={this.state.Inputtext} name="" id="" cols="30" rows="10" onChange={(e) => {
              this.setState({ Inputtext: e.target.value });
            }}></textarea>
        </div>
        <div>
            <label>showdate</label>
            <input type={"date"} 
            value = {this.state.showdate}
            onChange={(e) => {
                this.setState({showdate: e.target.value});
            }}/>
        </div>
        <div>
            <label>myrange</label>
            <input type={"range"}
            value={this.state.myrange}
            onChange={(e) => {
                this.setState({myrange:e.target.value});
            }} 
             />
        </div>
        <div>
            <label>Selectgender</label><br />
            <label>Male</label>
            <input type={"radio"} name={"gender"}
            value={"male"}
            onChange={(e)=>{
                this.setState({hbradio:e.target.value})
            }} />
            <label>Female</label>
            <input type={"radio"} name={"gender"}
            value={"Female"}
            onChange={(e)=>{
                this.setState({hbradio:e.target.value})
            }} />
        </div>
        <div>
            <label>car</label>
            <input type={"checkbox"} name={"check"} value={"car"}
            onChange={(e)=>{
                this.setState({checkboxA:e.target.value})
            }}
            />
            <label>bike</label>
            <input type={"checkbox"} name={"check"} value={"bike"}
            onChange={(e)=>{
                this.setState({checkboxB:e.target.value})
            }}
            />
        </div>

        <div>
          <p>Name: {this.state.name}</p>
          <p>Email: {this.state.email}</p>
          <p>Password: {this.state.password}</p>
          <p>textarea: {this.state.Inputtext}</p>
          <p>date:{this.state.showdate}</p>
          <p>range:{this.state.myrange}</p>
          <p>gender:{this.state.hbradio}</p>
          <p>checkbox:{this.state.checkboxA},{this.state.checkboxB}</p>
          
        </div>
      </>
    );
  }
}

export default Signup;