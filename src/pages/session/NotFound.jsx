import { withStyles } from '@mui/styles';
import { Component } from 'react';
import GDSEButton from '../../components/common/Button';
import not_found from '../../assets/img/NotFound.jpg';
import { Link } from 'react-router-dom';

// Craeatng styling NotFound window
const styleSheet = () => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img__container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '10px'
    }
})

class NotFound extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { classes } = this.props
        return (
            <div className={classes.container}>
                <div className={classes.img__container}>
                    <img src={not_found} alt="" />
                </div>
                {/*Click the button rapping and to go home root directry*/}
                {/*<Link to="login">*/}
                <Link to="/">
                    <GDSEButton
                        variant="contained"
                        label="Back to HomePage"
                    />
                </Link>
            </div >
        )
    }
}
export default withStyles(styleSheet)(NotFound)