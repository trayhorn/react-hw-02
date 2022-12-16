import s from './ReviewForm.module.css';
import { useFormik } from 'formik';
import { Checkbox } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const ReviewForm = () => {
  const formik = useFormik({
    initialValues: {
      textarea: '',
      priceRate: false,
      serviceRate: false,
      locationRate: false
    },

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} autoComplete='off'>
        <Box sx={{width: 500, maxWidth: '100%'}}>
          <TextField
            name="textarea"
            fullWidth
            value={formik.values.textarea}
            onChange={formik.handleChange}
            label="Your feedback" id="fullWidth"
          />
        </Box>
        <FormGroup className={s.formGroup}>
          <FormControlLabel onChange={formik.handleChange} name='priceRate' control={<Checkbox />} label="Price" />
          <FormControlLabel onChange={formik.handleChange} name='serviceRate' control={<Checkbox />} label="Service" />
          <FormControlLabel onChange={formik.handleChange} name='locationRate' control={<Checkbox />} label="Location" />
        </FormGroup>
        <Button variant="contained" type='submit'>Submit</Button>
      </form>
    </div>
  );
};

export default ReviewForm;
