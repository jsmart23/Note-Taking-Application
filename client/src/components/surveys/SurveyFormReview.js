import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as actions from '../../actions';


const SurveyReview = ({onCancel, formValues, submitSurvey, history}) => {
  return (
    <div>
      <h5>Confirm you selection</h5>
      <div>
        <div>
          <label>SurveyTitle</label>
          <div>{formValues.title}</div>
        </div>
      </div>

      <div>
        <div>
          <label>Body</label>
          <div>{formValues.body}</div>
        </div>
      </div>

      <button
        onClick={() => submitSurvey(formValues, history)}
        className="green btn-flat right white-text">
          Save
        <i className="material-icons right">save</i>
      </button>


      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
    </div>
  );
};

function mapStateToProps(state) {
//  console.log(state)
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyReview));
