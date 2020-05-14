import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import * as actions from '../../store/actions/index';
import { withRouter } from "react-router";

const SurveyFormReview = (props) => {
    const reviewFields = formFields.map((field, index) => {
        return (
            <div key={index}>
                <label>{field.label}</label>
                <div>
                    {props.formValues[field.name]}
                </div>
            </div>
        )
    })

    return (
        <div>
            <h5>Please confirm your entries.</h5>
            {reviewFields}
            <button className="yellow darken-3 white-text btn-flat" onClick={props.onCancel}>Back</button>
            <button className="green white-text btn-flat right" onClick={() => props.submitSurvey(props.formValues, props.history)}>Send Survey<i className="material-icons right">email</i></button>
        </div>
    );
};

const mapStateToStore = state => {
    return { formValues: state.form.surveyForm.values }
}

export default connect(mapStateToStore, actions)(withRouter(SurveyFormReview));