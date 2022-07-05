import { Component } from "react"
import Typography from '@mui/material/Typography';
import backgroundIMG from "../../../assets/img/backgroundIMG.png"

class Greeting extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <Typography variant="h3" gutterBottom component="div">
                        Hello Akila {this.props.name}
                    </Typography>
                </div>
                <div>
                    <img src="https://imgs.search.brave.com/vorjX8TUhAwKZZ_Vqwlq0pBaWD3pRJjMqeZaIiTVYro/rs:fit:742:167:1/g:ce/aHR0cHM6Ly93d3cu/b3UuYWMubGsvd3At/Y29udGVudC91cGxv/YWRzLzIwMTkvMDYv/b3VzbC1sb2dvMi5w/bmc" alt="https://www.ijse.lk"/>
                    <img src={backgroundIMG} alt="https://www.ijse.lk"/>
                </div>
            </div>
        );
    }
}

export default Greeting