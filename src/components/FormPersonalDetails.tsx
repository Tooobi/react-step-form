import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";

export interface FormPersonalDetailsProps {
    nextStep: any;
    previousStep: any;
    handleChange: any;
    values: any;
}

export class FormPersonalDetails extends React.Component<FormPersonalDetailsProps> {
    continue = (e: any) => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = (e: any) => {
        e.preventDefault();
        this.props.previousStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <div>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            Enter Personal Details
                        </Typography>
                    </Toolbar>
                </AppBar>
                <TextField label={"Enter Your Occupation"} onChange={handleChange("occupation")} defaultValue={values.occupation} />
                <br />
                <TextField label={"Enter Your City"} onChange={handleChange("city")} defaultValue={values.city} />
                <br />
                <TextField label={"Enter Your Bio"} onChange={handleChange("bio")} defaultValue={values.bio} />
                <br />
                <Button variant="contained" style={styles.button} onClick={this.continue}>
                    Continue
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
export default FormPersonalDetails;
