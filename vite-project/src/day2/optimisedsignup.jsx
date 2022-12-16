import { Component } from "react";
class Logup extends Component {
  state = {
    name: "",
    age:"",
  
  };

  _handleInputChangeV1 = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  _handleInputChange = (e) => {
    const { value, name } = e.target;
    if (!name) {
      return;
    }

    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      name,
      age,
     
    } = this.state;
    return (
      <>
      <div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type={"text"}
            value={name}
            name="name"
            onChange={(e) => {
              this._handleInputChangeV1("name", e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="age">age</label>
          <input
            type={"text"}
            value={age}
            name="age"
            onChange={(e) => {
              this._handleInputChangeV1("age", e.target.value);
            }}
          />
        </div>

       
        </div>
        <div>
          <p>Name:{name}</p>
          <p>age:{age}</p>

        </div>  
        
        
      </>
    );
  }
}
export default Logup;
