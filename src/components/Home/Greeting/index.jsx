import { Component } from "react"
import Typography from '@mui/material/Typography';
import backgroundIMG from "../../../assets/img/backgroundIMG.png"
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";

/*
function Welcome(props) {
    return <h1> Hello, {props.name}</h1>;
}

// this is function base pass the props
function Home() {
    return(
        <div>
            <Welcome name = "Akila" />
        </div>
    );
}
*/

class Greeting extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const{classes} = this.props;
        return (
            /*<div style={{backgroundColor: 'yellow'}}>  --> don't use like this */
            <div className={classes.container}>
                <div>
                    {/*class base props pass -->*/}
                    <Typography variant="h3" gutterBottom component="div">
                        Hello Akila {this.props.name}
                    </Typography>
                </div>
                <div>
                    <img src="https://imgs.search.brave.com/vorjX8TUhAwKZZ_Vqwlq0pBaWD3pRJjMqeZaIiTVYro/rs:fit:742:167:1/g:ce/aHR0cHM6Ly93d3cu/b3UuYWMubGsvd3At/Y29udGVudC91cGxv/YWRzLzIwMTkvMDYv/b3VzbC1sb2dvMi5w/bmc" alt="https://www.ijse.lk"/>
                    {/*<img src={backgroundIMG} alt="https://www.ijse.lk"/> --> this line also working */}
                </div>
            </div>
        );
    }
}

export default withStyles(styleSheet) (Greeting)