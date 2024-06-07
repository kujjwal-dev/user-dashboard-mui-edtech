import { Box, Button, Snackbar, TextField, Typography, Alert } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

const initialValues = {
  father_name: '',
  mother_name: '',
  father_email_address: '',
  mother_email_address: '',
  father_phone_number: '',
  mother_phone_number: '',
  address: '',
  city: '',
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
  father_name: yup.string().required('Required'),
  mother_name: yup.string().required('Required'),
  father_email_address: yup
    .string()
    .email('Invalid email')
    .required('Required'),
  mother_email_address: yup
    .string()
    .email('Invalid email')
    .required('Required'),
  father_phone_number: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid.')
    .required('Required'),
  mother_phone_number: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid.')
    .required('Required'),
  address: yup.string().required('Required'),
  city: yup.string().required('Required'),
});

const ProfileView = () => {
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const [savedValues, setSavedValues] = useState(initialValues);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    const savedValuesString = localStorage.getItem('profileValues');
    if (savedValuesString) {
      setSavedValues(JSON.parse(savedValuesString));
    }
  }, []);

  const formSubmitHandler = (values) => {
    setSavedValues(values);
    localStorage.setItem('profileValues', JSON.stringify(values))
    setOpenSnackbar(true);
    console.log('Saved values:', values);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box m="15px">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Profile
      </Typography>

      <Formik
        initialValues={savedValues}
        validationSchema={userSchema}
        onSubmit={formSubmitHandler}
        enableReinitialize
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="20px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Father Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.father_name}
                name="father_name"
                error={!!touched.father_name && !!errors.father_name}
                helperText={touched.father_name && errors.father_name}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Mother Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.mother_name}
                name="mother_name"
                error={!!touched.mother_name && !!errors.mother_name}
                helperText={touched.mother_name && errors.mother_name}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Father Email Address"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.father_email_address}
                name="father_email_address"
                error={!!touched.father_email_address && !!errors.father_email_address}
                helperText={touched.father_email_address && errors.father_email_address}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Mother Email Address"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.mother_email_address}
                name="mother_email_address"
                error={!!touched.mother_email_address && !!errors.mother_email_address}
                helperText={touched.mother_email_address && errors.mother_email_address}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Father Phone Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.father_phone_number}
                name="father_phone_number"
                error={!!touched.father_phone_number && !!errors.father_phone_number}
                helperText={touched.father_phone_number && errors.father_phone_number}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Mother Phone Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.mother_phone_number}
                name="mother_phone_number"
                error={!!touched.mother_phone_number && !!errors.mother_phone_number}
                helperText={touched.mother_phone_number && errors.mother_phone_number}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="address"
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                sx={{ gridColumn: 'span 4' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="City"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.city}
                name="city"
                error={!!touched.city && !!errors.city}
                helperText={touched.city && errors.city}
                sx={{ gridColumn: 'span 2' }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="15px">
              <Button
                type="submit"
                color="secondary"
                variant="contained"
              >
                Update Profile
              </Button>
            </Box>
          </form>
        )}
      </Formik>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Profile updated successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ProfileView;
