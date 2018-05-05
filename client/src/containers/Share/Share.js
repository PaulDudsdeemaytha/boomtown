import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';

import { Step, Stepper, StepLabel, StepContent } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { Mutation } from 'react-apollo';

const tags = ['Electronics', 'Sports', 'Household Items', 'Test', 'Test2'];

class Share extends Component {
    state = {
        finished: false,
        stepIndex: 0,
        values: []
    };
    onSubmit = values => {
        console.log(values);
    };

    validate(...args) {
        console.log('Validating:', args);
    }

    handleNext = () => {
        const { stepIndex } = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2
        });
    };

    handlePrev = () => {
        const { stepIndex } = this.state;
        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1 });
        }
    };
    // Testing tags
    handleChange = (event, index, values) => this.setState({ values });

    tagItems(values) {
        return tags.map(tag => (
            <MenuItem
                key={tag}
                insetChildren
                checked={values && values.indexOf(tag) > -1}
                value={tag}
                primaryText={tag}
            />
        ));
    }
    // end of testing tags

    renderStepActions(step) {
        const { stepIndex } = this.state;
        const handleChange = (event, index, values) =>
            this.setState({ values });
        return (
            <div style={{ margin: '12px 0' }}>
                <RaisedButton
                    label={stepIndex === 3 ? 'Finish' : 'Next'}
                    disableTouchRipple
                    disableFocusRipple
                    primary
                    onClick={this.handleNext}
                    style={{ marginRight: 12 }}
                />
                {step > 0 && (
                    <FlatButton
                        label="Back"
                        disabled={stepIndex === 0}
                        disableTouchRipple
                        disableFocusRipple
                        onClick={this.handlePrev}
                    />
                )}
            </div>
        );
    }

    render() {
        const { finished, stepIndex } = this.state;
        const { values } = this.state;

        return (
            // <Form
            //     onSubmit={this.onSubmit.bind(this)}
            //     validate={this.validate.bind(this)}
            //     render={({handleSubmit, values}) =>{
            //         <Mutation mutation={ADD_ITEAM}>
            //         {(addItem,{data}=>{
            //             <form
            //                 onSubmit=(e => {
            //                     e.preventDefault();
            //                     handleSubmit();

            //                     const newItem= {
            //                         title.values.title,
            //                         description: values.descrip
            //                     }
            //                 })
            //         })}
            //     }}

            <div style={{ maxWidth: 580, maxHeight: 400, margin: 'auto' }}>
                <Stepper activeStep={stepIndex} orientation="vertical">
                    {/* Adding an Image */}
                    <Step>
                        <StepLabel>Add an Image</StepLabel>
                        <StepContent>
                            <p>
                                We live in a visual culture. Upload an image of
                                the item you're sharing.
                            </p>
                            <input
                                type="file"
                                required
                                accept=".png, .jpg, jpeg, .gif "
                            />
                            {this.renderStepActions(0)}
                        </StepContent>
                    </Step>
                    {/* Adding a title and Description */}
                    <Step>
                        <StepLabel>Add a Title & Description</StepLabel>
                        <StepContent>
                            <p>
                                Folks need to know what you're sharing. Give
                                them a clue by adding a title & description.
                            </p>
                            <TextField type="text" floatingLabelText="Title" />
                            <TextField
                                type="text"
                                floatingLabelText="Description"
                                multiLine
                                rows={3}
                            />

                            {this.renderStepActions(1)}
                        </StepContent>
                    </Step>
                    {/* Adding in Tags */}
                    <Step>
                        <StepLabel>Categorize your Item</StepLabel>
                        <StepContent>
                            <p>
                                To share an item, you'll need to add it to our
                                list of categories. You can select multiple
                                categories.
                            </p>
                            <SelectField
                                multiple
                                hintText="Select a category"
                                value={values}
                                onChange={this.handleChange}
                            >
                                {this.tagItems(values)}
                            </SelectField>
                        </StepContent>
                    </Step>
                    {/* Final Confirmation Step */}
                    <Step>
                        <StepLabel>Confirm Things!</StepLabel>
                        <StepContent>
                            <p>
                                Great! If you're happy with everything, tap the
                                button.
                            </p>
                            {this.renderStepActions(2)}
                        </StepContent>
                    </Step>
                </Stepper>
            </div>
        );
    }
}

export default Share;
