import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import { RouterLink } from 'src/components/router-link';
import type { Customer } from 'src/types/customer';
import { wait } from 'src/utils/wait';
import useRequest from 'src/hooks/use-request';
import { FC, useCallback } from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

interface CustomerEditFormProps {
  customer: Customer;
}

export const CustomerEditForm: FC<CustomerEditFormProps> = (props) => {
  const { customer, ...other } = props;

  const request = useRequest();

  const formik = useFormik({
    initialValues: {
      address: customer.address || '',
      email: customer.email || '',
      isActive: customer.is_active || false,
      first_name: customer.first_name || '',
      surname: customer.surname || '',
      telephone: customer.telephone || '',
      gender: customer.gender || '',
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
      surname: Yup.string().max(255).required('surname is required'),
      telephone: Yup.string().max(15),
      first_name: Yup.string().max(255).required('First Name is required'),
      address: Yup.string().min(2, 'Address is required'),
      gender: Yup.string().oneOf(['male', 'female']).required('Gender is required'),
    }),
    onSubmit: async (values, helpers): Promise<void> => {
      try {
        // NOTE: Make API request
        await wait(500);
        helpers.setStatus({ success: true });
        helpers.setSubmitting(false);
        toast.success('Customer updated');
      } catch (err) {
        console.error(err);
        toast.error('Something went wrong!');
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });

  const handleUpdateCustomer = useCallback(async () => {
    await request.put(`/users/${customer.id}`, {
      ...formik.values,
    });
  }, [customer.id, formik.values, request]);

  return (
    <form
      onSubmit={formik.handleSubmit}
      {...other}
    >
      <Card>
        <CardHeader title="Edit Customer" />
        <CardContent sx={{ pt: 0 }}>
          <Grid
            container
            spacing={3}
          >
            <Grid
              xs={12}
              md={6}
            >
              <TextField
                error={!!(formik.touched.first_name && formik.errors.first_name)}
                fullWidth
                helperText={formik.touched.first_name && formik.errors.first_name}
                label="First name"
                name="first_name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                required
                value={formik.values.first_name}
              />
            </Grid>
            <Grid
              xs={12}
              md={6}
            >
              <TextField
                error={!!(formik.touched.email && formik.errors.email)}
                fullWidth
                helperText={formik.touched.email && formik.errors.email}
                label="Email address"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                required
                value={formik.values.email}
              />
            </Grid>
            <Grid
              md={6}
              xs={12}
            >
              <TextField
                error={!!(formik.touched.address && formik.errors.address)}
                fullWidth
                // helperText={formik.touched.address && formik.errors.address}
                label="Address"
                name="address"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.address}
              />
            </Grid>
            <Grid
              xs={12}
              md={6}
            >
              <TextField
                error={!!(formik.touched.telephone && formik.errors.telephone)}
                fullWidth
                helperText={formik.touched.telephone && formik.errors.telephone}
                label="Phone number"
                name="phone"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.telephone}
              />
            </Grid>
            <Grid>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Select Gender</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="gender"
                  defaultValue={'male'}
                  value={formik.values.gender}
                  onChange={formik.handleChange}
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <Stack
          direction={{
            xs: 'column',
            sm: 'row',
          }}
          flexWrap="wrap"
          spacing={3}
          sx={{ p: 3 }}
        >
          <Button
            // disabled={formik.isSubmitting}
            // type="submit"
            variant="contained"
            onClick={handleUpdateCustomer}
          >
            Update
          </Button>
          <Button
            color="error"
            variant="outlined"
            component={RouterLink}
            disabled={formik.isSubmitting}
            href={`/customers/${customer.id}`}
          >
            Cancel
          </Button>
        </Stack>
      </Card>
    </form>
  );
};

CustomerEditForm.propTypes = {
  // @ts-ignore
  customer: PropTypes.object.isRequired,
};
