import React, {Component} from 'react';
import {reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import {Link} from 'react-router-dom';

class SurveyForm extends Component {
  renderFields() {
    return (
      <div>
        <Field label="Survey Title" type="text" name="title" component={SurveyField} />
        <Field label="Subject Line" type="text" name="subject" component={SurveyField} />
        <Field label="Note Body" type="text" name="body" component={SurveyField} />

      </div>
    );
  }


  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">Cancel</Link>
          <button className="teal btn-flat right white-text" type="submit">Next</button>
        </form>
      </div>
    )
  }
}

function validate(values) {
  const errors= {};
  if (!values.title) {
    errors.title = 'You must provide a title';
  }
  if (!values.subject) {
    errors.subject = 'You must provide a subject';
  }
  if (!values.body) {
    errors.body = 'You must provide a body';
  }


  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
