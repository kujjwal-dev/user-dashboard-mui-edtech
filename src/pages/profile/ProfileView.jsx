import { Box, Button, Snackbar, TextField, Typography, Alert, Container } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import axios from 'axios';



const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
  fathername: yup.string().required('Father Name is required'),
  mothername: yup.string().required('Mother Name is required'),
  father_phone_number: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Father Phone Number is required'),
  mother_phone_number: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Mother Phone Number is required'),
  father_email: yup.string().email('Invalid email').required('Father Email is required'),
  mother_email: yup.string().email('Invalid email').required('Mother Email is required'),
  address: yup.string().required('Address is required'),
  city: yup.string().required('City is required'),
});

const ProfileView = () => {
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [userData,  setUserData] = useState(null);
  const [loading, setLoading ] = useState(false);
  console.log("userData", userData)

  const initialValues = {
    fathername: userData?.fathername || '',
    mothername: userData?.mothername ||  '',
    father_phone_number: userData?.father_phone_number || '',
    mother_phone_number: userData?.mother_phone_number || '',
    father_email: userData?.father_email || '',
    mother_email: userData?.mother_email || '',
    address: userData?.address || '',
    city: userData?.city || '',
  };

  const formSubmitHandler = async (values) => {
    try {
      setLoading(true)
      console.log('Submitting values:', values);
      const response = await axios.put('http://localhost:3001/api/v1/profile/update_profile', {
        fathername: values.fathername,
        mothername: values.mothername,
        father_phone_number: values.father_phone_number,
        mother_phone_number: values.mother_phone_number,
        father_email: values.father_email,
        mother_email: values.mother_email,
        address: values.address,
        city: values.city,
      },{
        withCredentials:true,
      });
      console.log('Backend response:', response);

      if (response?.data?.success) {
        setSnackbarMessage('Profile updated successfully!');
        setSnackbarSeverity('success');
      } else {
        setSnackbarMessage('Error updating profile.');
        setSnackbarSeverity('error');
      }
      setOpenSnackbar(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSnackbarMessage('Error submitting form: ' + (error.response?.data?.message || error.message));
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
    finally {
      setLoading(false)

    }
  };
  async function getUser() {
      const response = await axios.get(`http://localhost:3001/api/v1/profile/get_profile`,{
        withCredentials:true,
      })
      setUserData(response?.data?.data)
  }

  useEffect(() => {
    getUser();
  }, [])

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="md">
    <Box m="15px">
      <Typography variant="h4" sx={{ mb: 5 }}>
      Profile
      </Typography>

      <Formik
        initialValues={initialValues}
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
                size='medium'
                variant="outlined"
                type="text"
                label="Father Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.fathername}
                name="fathername"
                error={!!touched.fathername && !!errors.fathername}
                helperText={touched.fathername && errors.fathername}
                sx={{ gridColumn: 'span 2'}}
              />
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Mother Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.mothername}
                name="mothername"
                error={!!touched.mothername && !!errors.mothername}
                helperText={touched.mothername && errors.mothername}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                fullWidth
                variant="outlined"
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
                variant="outlined"
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
                variant="outlined"
                type="text"
                label="Father Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.father_email}
                name="father_email"
                error={!!touched.father_email && !!errors.father_email}
                helperText={touched.father_email && errors.father_email}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Mother Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.mother_email}
                name="mother_email"
                error={!!touched.mother_email && !!errors.mother_email}
                helperText={touched.mother_email && errors.mother_email}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                fullWidth
                variant="outlined"
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
                variant="outlined"
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
              <Button type="submit" color="secondary" disabled={loading? true: false} variant="contained">
               {loading? "loading ...": " Save Changes"}
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
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
    </Container>
  );
};

export default ProfileView;
