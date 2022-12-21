import { Component, ReactNode } from "react";
import { Button } from "../day6todoappincomponent/buttoncomp";
class lifecycleE extends Component{
    constructor(props) {
        super(props);
        this.state ={
            counter: 1,
        };
        console.log("1: constructor running");
        
    }
    static getDerivedStateFromProps(props, state){
        console.log("2: getDerivedStateFromProps running");
        return null;
        
    }

    componentDidMount() {
        console.log("4: componentDidMount running");

    }

    render() {
        console.log("3: Render Method");
        return(
            <>
            <p>This is a class Component {this.state.counter}</p>
            <Button
                onclick={() =>{
                    this.setstate({ counter: this.state.counter +1});
                }}
                >
                    Increment
                    </Button>
            </>
        );        
    }
}

export default lifecycleE