import * as React from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

class UserForm extends React.Component {
    state = {
        step: 1,
        firstName: "",
        lastName: "",
        email: "",
        occupation: "",
        city: "",
        bio: ""
    };

    // proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    // go back to previous step
    previousStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    // Handle fields change
    handleChange = (input: any) => (e: any) => {
        this.setState({ [input]: e.target.value });
    };

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, occupation, city, bio } = this.state;
        const values = { firstName, lastName, email, occupation, city, bio };

        switch (step) {
            case 1:
                return <FormUserDetails nextStep={this.nextStep} handleChange={this.handleChange} values={values} />;
            case 2:
                return (
                    <FormPersonalDetails
                        nextStep={this.nextStep}
                        previousStep={this.previousStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 3:
                return <Confirm nextStep={this.nextStep} previousStep={this.previousStep} values={values} />;
            case 4:
                return <Success />;
        }
    }
}

export default UserForm;
