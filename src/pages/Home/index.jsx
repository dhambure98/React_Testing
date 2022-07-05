import { Component } from "react"
import Greeting from "../../components/Home/Greeting";

class HomePage extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            /*<div>
                <h1>Hello From the Home Page</h1>
                <h2>What's up {this.props.name} and now My status {this.props.status}</h2>
            </div>*/

            <Greeting name="IJSE"/>
        )
    }
}

export default HomePage
