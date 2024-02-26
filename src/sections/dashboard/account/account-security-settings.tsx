import type { FC } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as Yup from 'yup';
import { Scrollbar } from 'src/components/scrollbar';
import { FormControl, FormHelperText } from '@mui/material';
import { MuiOtpInput } from 'mui-one-time-password-input';
import { useFormik } from 'formik';
import React from 'react';
import toast from 'react-hot-toast';
import useRequest from 'src/hooks/use-request';
import { useAuthToken } from 'src/hooks/use-auth-token';

interface LoginEvent {
  id: string;
  createdAt: number;
  ip: string;
  type: string;
  userAgent: string;
}

interface Values {
  username: string;
  otp: string;
  password: string;
  password_confirm: string;
}

const initialValues: Values = {
  username: '',
  otp: '',
  password: '',
  password_confirm: '',
};

const validationSchema = Yup.object({
  username: Yup.string().email().required('Required'),
  otp: Yup.number().required('Required'),
  password: Yup.string().min(7, 'Must be at least 7 characters').max(255).required('Required'),
  password_confirm: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Passwords required and must match'),
});

interface AccountSecuritySettingsProps {
  loginEvents: LoginEvent[];
}

export const AccountSecuritySettings: FC<AccountSecuritySettingsProps> = (props) => {
  const { loginEvents } = props;

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (): void => {},
  });

  const [codeSent, setCodeSent] = React.useState(false);

  const { user } = useAuthToken();

  const request = useRequest();
  // const navigate = useNavigate();

  const handlePasswordChange = React.useCallback(async () => {
    const response = await request.post('/password-change', {
      otp: parseInt(formik.values.otp),
      password: formik.values.password,
      password_confirm: formik.values.password_confirm,
    });

    if (response.data.status !== 200) {
      toast.error(response.data?.message);
    } else {
      toast.success(response.data?.message);
      // navigate(paths.dashboard.index);
    }
  }, [formik.values.otp, formik.values.password, formik.values.password_confirm, request]);

  const requestOTP = React.useCallback(async () => {
    const response = await request.post('/request-otp', {
      username: user?.email,
    });

    if (response.data.status !== 200) {
      toast.error(response.data?.message);
    } else {
      toast.success(response.data?.message);
      setCodeSent(true);
    }
  }, [request, user?.email]);

  return (
    <Stack spacing={4}>
      <Card>
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              xs={12}
              md={4}
            >
              <Typography variant="h6">Change password</Typography>
            </Grid>
            <Grid
              xs={12}
              sm={12}
              md={8}
            >
              <form
                noValidate
                onSubmit={formik.handleSubmit}
              >
                <Stack spacing={3}>
                  <FormControl error={!!(formik.touched.otp && formik.errors.otp)}>
                    <MuiOtpInput
                      length={6}
                      onBlur={() => formik.handleBlur('otp')}
                      onChange={(value) => formik.setFieldValue('otp', value)}
                      onFocus={() => formik.setFieldTouched('otp')}
                      sx={{
                        '& .MuiFilledInput-input': {
                          p: '8px',
                        },
                      }}
                      value={formik.values.otp}
                    />
                    {!!(formik.touched.otp && formik.errors.otp) && (
                      <FormHelperText>{formik.errors.otp}</FormHelperText>
                    )}
                  </FormControl>

                  <Button
                    fullWidth
                    size="small"
                    sx={{ mt: 3 }}
                    onClick={() => requestOTP()}
                    variant="text"
                  >
                    Resend Code
                  </Button>

                  {codeSent ? (
                    <>
                      <TextField
                        size="small"
                        error={!!(formik.touched.password && formik.errors.password)}
                        fullWidth
                        helperText={formik.touched.password && formik.errors.password}
                        label="Password"
                        name="password"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        type="password"
                        value={formik.values.password}
                      />
                      <TextField
                        size="small"
                        error={
                          !!(formik.touched.password_confirm && formik.errors.password_confirm)
                        }
                        fullWidth
                        helperText={
                          formik.touched.password_confirm && formik.errors.password_confirm
                        }
                        label="Password (Confirm)"
                        name="password_confirm"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        type="password"
                        value={formik.values.password_confirm}
                      />
                      <Button
                        fullWidth
                        size="small"
                        sx={{ mt: 3 }}
                        onClick={() => handlePasswordChange()}
                        variant="contained"
                      >
                        Change
                      </Button>
                    </>
                  ) : null}
                </Stack>
              </form>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card>
        <CardHeader
          title="Login history"
          subheader="Your recent login activity"
        />
        <Scrollbar>
          <Table sx={{ minWidth: 500 }}>
            <TableHead>
              <TableRow>
                <TableCell>Login type</TableCell>
                <TableCell>IP Address</TableCell>
                <TableCell>Client</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loginEvents.map((event) => {
                const createdAt = format(event.createdAt, 'HH:mm a MM/dd/yyyy');

                return (
                  <TableRow
                    key={event.id}
                    sx={{
                      '&:last-child td, &:last-child th': {
                        border: 0,
                      },
                    }}
                  >
                    <TableCell>
                      <Typography variant="subtitle2">{event.type}</Typography>
                      <Typography
                        variant="body2"
                        color="body2"
                      >
                        on {createdAt}
                      </Typography>
                    </TableCell>
                    <TableCell>{event.ip}</TableCell>
                    <TableCell>{event.userAgent}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Scrollbar>
      </Card>
    </Stack>
  );
};

AccountSecuritySettings.propTypes = {
  loginEvents: PropTypes.array.isRequired,
};
