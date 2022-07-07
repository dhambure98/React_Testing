import React, {Component} from "react";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';

class Countable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    incrementCount(){
        console.log("Increment function calling...");

        /*state value change -->*/
        this.setState({
            count: this.state.count + 1
        })
    }


    render() {
        return (
            <div>
                <Typography variant="h3" gutterBottom>
                    {/*state value accsess-->*/}
                    Count: {this.state.count}
                </Typography>
                <Button
                    variant="contained"
                    onClick={()=> {
                        console.log('clicked!')
                        this.incrementCount()
                    }}
                >
                    Increase!
                </Button>
            </div>
        );
    }
}

export default Countable