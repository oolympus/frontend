import type { FC } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import * as Yup from 'yup';

import { Customer } from 'src/types/customer';
import {
  Card,
  CardContent,
  CardHeader,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { useFormik } from 'formik';
import { useMounted } from 'src/hooks/use-mounted';
import useRequest from 'src/hooks/use-request';
import React from 'react';
import toast from 'react-hot-toast';
import { Loan } from 'src/types/loan';

interface Values {
  principal: number;
  payment_intervals: 'weekly' | 'monthly';
  submit: null;
}

const initialValues: Values = {
  principal: 55000,
  payment_intervals: 'weekly',
  submit: null,
};

const validationSchema = Yup.object({
  principal: Yup.string().max(255).required('principal is required'),
  payment_intervals: Yup.string()
    .oneOf(['weekly', 'monthly'])
    .required('Payment interval is required'),
});

interface LoanApplicationProps {
  onCancel: () => void;
  onApply: () => void;
  customer: Customer;
  loan: Loan;
}

export const LoanApplication: FC<LoanApplicationProps> = (props) => {
  const { onCancel, onApply, customer, loan } = props;
  const isMounted = useMounted();

  const request = useRequest();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, helpers): Promise<void> => {
      try {
        await request.post('/loans/apply', {
          principal: values.principal,
          payment_intervals: values.payment_intervals,
        });
      } catch (err) {
        console.error(err);

        if (isMounted()) {
          helpers.setStatus({ success: false });
          helpers.setErrors({ submit: err.message });
          helpers.setSubmitting(false);
        }
      }
    },
  });

  const handleSubmit = React.useCallback(async () => {
    const response = await request.post('/loans/apply', {
      principal: formik.values.principal,
      payment_intervals: formik.values.payment_intervals,
    });
    if (response.data?.status !== 200) {
      toast.error(response.data?.message);
    } else {
      toast.success(response.data?.message);
    }
  }, [formik.values.payment_intervals, formik.values.principal, request]);

  return (
    <Stack
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Card
        elevation={16}
        sx={{
          width: '40%',
        }}
      >
        <CardHeader
          sx={{ pb: 0 }}
          title="Loan Application"
        />
        <CardContent>
          <form>
            <Stack spacing={2}>
              <TextField
                autoFocus
                error={!!(formik.touched.principal && formik.errors.principal)}
                fullWidth
                helperText={formik.touched.principal && formik.errors.principal}
                label="principal"
                name="principal"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="text"
                value={formik.values.principal}
              />
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="payment_intervals">Payment Interval</InputLabel>
                <Select
                  labelId="payment_intervals"
                  name="payment_intervals"
                  id="payment_intervals"
                  value={formik.values.payment_intervals}
                  label="Payment Interval"
                  onChange={formik.handleChange}
                >
                  <MenuItem value={'weekly'}>Weekly</MenuItem>
                  <MenuItem value={'monthy'}>Monthly</MenuItem>
                </Select>
              </FormControl>
            </Stack>
            {formik.errors.submit && (
              <FormHelperText
                error
                sx={{ mt: 3 }}
              >
                {formik.errors.submit as string}
              </FormHelperText>
            )}
            <Stack
              alignItems="center"
              direction="row"
              spacing={2}
              marginTop={3}
              justifyContent={'space-between'}
            >
              <Button
                color="primary"
                size="small"
                fullWidth
                variant="contained"
                onClick={() => handleSubmit()}
              >
                Apply
              </Button>
              <Button
                color="error"
                onClick={onCancel}
                size="small"
                variant="outlined"
                fullWidth
              >
                Cancel
              </Button>
            </Stack>
          </form>
        </CardContent>
      </Card>
    </Stack>
  );
};

LoanApplication.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onApply: PropTypes.func.isRequired,
  customer: PropTypes.any.isRequired,
};
