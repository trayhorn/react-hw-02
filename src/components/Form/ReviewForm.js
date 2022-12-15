import s from './ReviewForm.module.css';
import { Component } from "react";
import { Formik, Form } from 'formik';
import { useFormik } from 'formik';
import { Checkbox } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

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
           <Box
            sx={{
              width: 500,
              maxWidth: '100%',
            }}
          >
            <TextField name="textarea" fullWidth label="Your feedback" id="fullWidth" />
          </Box>
          <FormGroup className={s.formGroup}>
            <FormControlLabel control={<Checkbox />} label="Extra" />
            <FormControlLabel name='serviceRate' control={<Checkbox />} label="Service" />
            <FormControlLabel control={<Checkbox />} label="Location" />
          </FormGroup>
          <button type="submit">Submit</button>
          <Button variant="contained">Submit</Button>
        </Form>
      </Formik>
    )
  }
}

