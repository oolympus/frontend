import type { FC } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import * as Yup from 'yup';

import {
  Card,
  CardContent,
  CardHeader,
  FormControl,
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
  amount: number;
  platform: string;
  channel: string;
  reference: string;
  initiated_by: string;
  comments: string;
}

const initialValues: Values = {
  amount: 0,
  platform: '',
  channel: '',
  reference: '',
  initiated_by: '',
  comments: '',
};

const validationSchema = Yup.object({
  principal: Yup.string().max(255).required('principal is required'),
  channel: Yup.string().oneOf(['weekly', 'monthly']).required('Payment interval is required'),
});

interface LoanPaybackProps {
  onCancel: () => void;
  loan: Loan;
}

export const LoanPayback: FC<LoanPaybackProps> = (props) => {
  const { loan, onCancel } = props;
  const isMounted = useMounted();
  console.log(loan);
  const request = useRequest();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, helpers): Promise<void> => {},
  });

  const handleSubmit = React.useCallback(async () => {
    const response = await request.post(`/loans/${loan.id}/pay`, {
      ...formik.values,
      amount: Number(formik.values.amount),
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
          title="Loan Payback"
        />
        <CardContent>
          <form>
            <Stack spacing={2}>
              <TextField
                autoFocus
                error={!!(formik.touched.amount && formik.errors.amount)}
                fullWidth
                helperText={formik.touched.amount && formik.errors.amount}
                label="Amount"
                name="amount"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="text"
                value={formik.values.amount}
              />
              <TextField
                autoFocus
                error={!!(formik.touched.initiated_by && formik.errors.initiated_by)}
                fullWidth
                helperText={formik.touched.initiated_by && formik.errors.initiated_by}
                label="Initiated by"
                name="initiated_by"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="text"
                value={formik.values.initiated_by}
              />
              <TextField
                autoFocus
                error={!!(formik.touched.platform && formik.errors.platform)}
                fullWidth
                helperText={formik.touched.platform && formik.errors.platform}
                label="Platform"
                name="platform"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="text"
                value={formik.values.platform}
              />
              <TextField
                autoFocus
                error={!!(formik.touched.reference && formik.errors.reference)}
                fullWidth
                helperText={formik.touched.reference && formik.errors.reference}
                label="Reference"
                name="reference"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="text"
                value={formik.values.reference}
              />
              <TextField
                autoFocus
                error={!!(formik.touched.comments && formik.errors.comments)}
                fullWidth
                helperText={formik.touched.comments && formik.errors.comments}
                label="Comments"
                name="comments"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="text"
                value={formik.values.comments}
              />
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="channel">Channel</InputLabel>
                <Select
                  labelId="channel"
                  name="channel"
                  id="channel"
                  value={formik.values.channel}
                  label="Payment Interval"
                  onChange={formik.handleChange}
                >
                  <MenuItem value={'airtel'}>Airtel</MenuItem>
                  <MenuItem value={'mtn'}>MTN</MenuItem>
                  <MenuItem value={'bank'}>Bank</MenuItem>
                </Select>
              </FormControl>
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
                variant="contained"
                onClick={() => handleSubmit()}
              >
                Payback
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

LoanPayback.propTypes = {};
