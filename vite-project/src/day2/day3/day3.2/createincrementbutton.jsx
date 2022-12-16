import { Component } from "react";
class Increment extends Component{
    state = {
        increse:0,
    };
    handleOnClick = () => {
        this.setState({
            increse: this.state.counter +1,
        })
        console.log(this.state.counter);
        this.setState({
            increse: this.state.counter +1,
        });
        console.log(this.state.counter);
        this.setState({
            increse: this.state.counter +1,

        })
        console.log(this.state.counter)
    }
    render(){
        const{increse} = this.state;
        return(
            <>
            <p>{increse}</p>
            <button onClick={this.handleOnClick}>Increment</button>
            </>
        )
    }

}
export default Increment;