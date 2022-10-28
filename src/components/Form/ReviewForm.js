import { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';

const initialValues = {
  textarea: '',
  serviceRate: false,
  priceRate: false,
  locationRate: false
}

export default class ReviewForm extends Component {

  handleSubmit(values, {resetForm}) {
    console.log(values);
    resetForm();
  }

  render() {
    return (
      <Formik
        onSubmit={this.handleSubmit}
        initialValues={initialValues}
      >
        <Form
          autoComplete="off"
        >
          <div>
            <label>
              Please leave a detailed review
              <Field name="textarea"></Field>
            </label>
          </div>
          <div>
            <div>
              <label>
                Service
                <Field type="checkbox" name="serviceRate"
                />
              </label>
            </div>
            <div>
              <label>
                Prices
                <Field type="checkbox" name="priceRate"
                />
            </label>
            </div>
            <div>
              <label>
                Location
                <Field type="checkbox" name="locationRate"
                />
          </label>
            </div>
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    )
  }
}