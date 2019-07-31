import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";

export class Success extends React.Component {
    render() {
        return (
            <div>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            Success
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Typography variant="h5" color="inherit">
                    Thank you for your submission
                </Typography>
                <Typography variant="body1" color="inherit">
                    You will gt an email with further instructions.
                </Typography>
            </div>
        );
    }
}

export default Success;
