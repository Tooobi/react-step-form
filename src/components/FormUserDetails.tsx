import * as React from "react";
import { ThemeProvider } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/styles/makeStyles";
import createStyles from "@material-ui/styles/createStyles";
import { Theme } from "@material-ui/core";
import { classes } from "istanbul-lib-coverage";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import useTheme from "@material-ui/core/styles/useTheme";

export interface FormUserDetailsProps {
    nextStep: any;
    handleChange: any;
    values: any;
}

export class FormUserDetails extends React.Component<FormUserDetailsProps, {}> {
    continue = (e: any) => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <div>
                {/*<ThemeProvider >*/}

                {/*<React.Fragment>*/}
                {/*<AppBar title={"Enter User Details "}/>*/}
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            Enter User Details
                        </Typography>
                    </Toolbar>
                </AppBar>
                <TextField label={"Enter Your First Name"} onChange={handleChange("firstName")} defaultValue={values.firstName} />
                <br />
                <TextField label={"Enter Your Last Name"} onChange={handleChange("lastName")} defaultValue={values.lastName} />
                <br />
                <TextField label={"Enter Your E-Mail"} onChange={handleChange("email")} defaultValue={values.email} />
                <br />
                <Button variant="contained" style={styles.button} onClick={this.continue}>
                    Continue
                </Button>

                {/*</React.Fragment>*/}

                {/*</ThemeProvider>*/}
            </div>
        );
    }
}

const styles = {
    button: {
        margin: 15
    }
};
export default FormUserDetails;
