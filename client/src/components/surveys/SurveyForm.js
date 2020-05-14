import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';


class SurveyForm extends Component {
    renderFields() {
        return formFields.map((field, index) => {
            return <Field key={index} component={SurveyField}  type='text' label={field.label} name={field.name}/>
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link to={"/surveys"} className="red btn-flat white-text">Cancel</Link>
                    <button type="submit" className="teal btn-flat right white-text">Next<i className="material-icons right">done</i></button>
                </form>
            </div>
        )
    }
}

function validate(values) {
    const errors = {};
    
    errors.recipients = validateEmails(values.recipients || '');

    formFields.forEach(field => {
        if (!values[field.name]) {
            errors[field.name] = `You must provide a ${field.name}`;
        }
    })


    return errors;
}

export default reduxForm({ form: 'surveyForm', validate: validate, destroyOnUnmount: false })(SurveyForm);
