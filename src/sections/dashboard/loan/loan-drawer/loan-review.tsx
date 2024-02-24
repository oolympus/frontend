import type { FC } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import * as Yup from 'yup';

import { Card, CardContent, CardHeader } from '@mui/material';
import { useFormik } from 'formik';
import useRequest from 'src/hooks/use-request';
import React from 'react';
import toast from 'react-hot-toast';
import { Loan } from 'src/types/loan';

interface Values {
  disbursed_amount: number;
  loan_status: string;
}

const initialValues: Values = {
  disbursed_amount: 0,
  loan_status: '',
};

const validationSchema = Yup.object({
  disbursed_amount: Yup.string().max(255).required('Disbursed amount is required'),
  loan_status: Yup.string().oneOf(['cancelled', 'active']).required('Please set a loan_status'),
});

interface LoanReviewProps {
  onCancel: () => void;
  loan: Loan;
}

export const LoanReview: FC<LoanReviewProps> = (props) => {
  const { loan, onCancel } = props;
  console.log(loan);
  const request = useRequest();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, helpers): Promise<void> => {},
  });

  const handleReview = React.useCallback(async () => {
    const response = await request.post(`/loans/${loan.id}/review`, {
      loan_status: 'active',
      disbursed_amount: Number(formik.values.disbursed_amount),
    });
    if (response.data?.status !== 200) {
      toast.error(response.data?.message);
    } else {
      toast.success(response.data?.message);
    }
  }, [formik.values, loan.id, request]);

  const handleReject = React.useCallback(async () => {
    const response = await request.post(`/loans/${loan.id}/review`, {
      loan_status: 'cancelled',
      disbursed_amount: Number(formik.values.disbursed_amount),
    });
    if (response.data?.status !== 200) {
      toast.error(response.data?.message);
    } else {
      toast.success(response.data?.message);
    }
  }, [formik.values, loan.id, request]);

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
          title="Loan Review"
        />
        <CardContent>
          <form>
            <Stack spacing={2}>
              <TextField
                autoFocus
                error={!!(formik.touched.disbursed_amount && formik.errors.disbursed_amount)}
                fullWidth
                helperText={formik.touched.disbursed_amount && formik.errors.disbursed_amount}
                label="Disbursed Amount"
                name="disbursed_amount"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="text"
                value={formik.values.disbursed_amount}
              />
              {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="loan_status">Loan status</InputLabel>
                <Select
                  labelId="loan_status"
                  name="loan_status"
                  id="loan_status"
                  defaultValue="cancelled"
                  value={formik.values.loan_status}
                  label="Payment Interval"
                  onChange={formik.handleChange}
                >
                  <MenuItem value={'cancelled'}>Cancelled</MenuItem>
                  <MenuItem value={'active'}>Active</MenuItem>
                </Select>
              </FormControl> */}
            </Stack>
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
                variant="outlined"
                onClick={() => {
                  handleReview();
                  onCancel();
                }}
              >
                Disburse funds
              </Button>
              <Button
                color="error"
                size="small"
                fullWidth
                variant="outlined"
                onClick={() => {
                  handleReject();
                  onCancel();
                }}
              >
                Reject loan
              </Button>
            </Stack>
          </form>
        </CardContent>
      </Card>
    </Stack>
  );
};

LoanReview.propTypes = {};
