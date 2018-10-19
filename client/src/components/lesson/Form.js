import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Form extends Component {
  renderField = (data) => {
    data.input.className = 'form-control';

    const isInvalid = data.meta.touched && !!data.meta.error;
    if (isInvalid) {
      data.input.className += ' is-invalid';
      data.input['aria-invalid'] = true;
    }

    if (this.props.error && data.meta.touched && !data.meta.error) {
      data.input.className += ' is-valid';
    }

    return <div className={`form-group`}>
      <label htmlFor={`lesson_${data.input.name}`} className="form-control-label">{data.input.name}</label>
      <input {...data.input} type={data.type} step={data.step} required={data.required} placeholder={data.placeholder} id={`lesson_${data.input.name}`}/>
      {isInvalid && <div className="invalid-feedback">{data.meta.error}</div>}
    </div>;
  }

  render() {
    const { handleSubmit } = this.props;

    return <form onSubmit={handleSubmit}>
      <Field component={this.renderField} name="description" type="text" placeholder="The description of the lesson." required={true}/>
      <Field component={this.renderField} name="teacher" type="text" placeholder="The teacher for this lesson." required={true}/>
      <Field component={this.renderField} name="tasks" type="text" placeholder="All tasks for this lesson." />
      <Field component={this.renderField} name="groups" type="text" placeholder="All groups that have this lesson." />
      <Field component={this.renderField} name="code" type="text" placeholder="The lesson's code." required={true}/>
      <Field component={this.renderField} name="name" type="text" placeholder="The name of the lesson." required={true}/>

        <button type="submit" className="btn btn-success">Submit</button>
      </form>;
  }
}

export default reduxForm({form: 'lesson', enableReinitialize: true, keepDirtyOnReinitialize: true})(Form);
