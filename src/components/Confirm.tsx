import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";

export interface ConfirmProps {
    nextStep: any;
    previousStep: any;
    values: any;
}

export class Confirm extends React.Component<ConfirmProps, {}> {
    continue = (e: any) => {
        e.preventDefault();
        // Process your form
        this.props.nextStep();
    };
    back = (e: any) => {
        e.preventDefault();
        this.props.previousStep();
    };

    render() {
        const { values: { firstName, lastName, email, occupation, city, bio } } = this.props;
        return (
            <div>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            Confirm User Data
                        </Typography>
                    </Toolbar>
                </AppBar>
                <List>
                    <ListItem>
                        <ListItemText primary={"First Name"} secondary={firstName} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={"Last Name"} secondary={lastName} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={"E-Mail"} secondary={email} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={"Occupation"} secondary={occupation} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={"City"} secondary={city} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={"Bio"} secondary={bio} />
                    </ListItem>
                </List>
                <br />
                <Button variant="contained" style={styles.button} onClick={this.continue}>
                    Confirm & Continue
                </Button>
                <Button variant="contained" style={styles.button} onClick={this.back}>
                    Back
                </Button>
            </div>
        );
    }
}

const styles = {
    button: {
        margin: 15
    }
};
export default Confirm;
