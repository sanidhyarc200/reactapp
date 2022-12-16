import { Component } from "react";

class Logup extends Component{
    state = {
        name:"",
        age:"",
        email:"",
    }
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

    render(){
        const{
            name,
            age,
            email,

        } = this.state;
    }
}