import { Component, Fragment } from "react"
import Greeting from "../../components/Home/Greeting";
import Countable from "../../components/Home/Countable"
import Divider from '@mui/material/Divider';

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
            <Fragment>
                <Greeting name="IJSE"/>
                <Divider light/>
                <Countable/>
            </Fragment>
        )
    }
}

export default HomePage
