import { useState, type FC } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import numeral from 'numeral';
import Edit02Icon from '@untitled-ui/icons-react/build/esm/Edit02';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import type { Theme } from '@mui/material/styles/createTheme';

import { PropertyList } from 'src/components/property-list';
import { PropertyListItem } from 'src/components/property-list-item';
import type { SeverityPillColor } from 'src/components/severity-pill';
import { SeverityPill } from 'src/components/severity-pill';
import type { Loan, LoanStatus } from 'src/types/loan';
import { Modal } from '@mui/material';
import { LoanPayback } from 'src/sections/dashboard/loan/loan-drawer/loan-payback';
import { LoanReview } from 'src/sections/dashboard/loan/loan-drawer/loan-review';

const statusMap: Record<LoanStatus, string> = {
  cancelled: 'warning',
  complete: 'success',
  pending: 'info',
  rejected: 'error',
};

interface LoanDetailsProps {
  onReview?: () => void;
  onPayback?: () => void;
  onEdit?: () => void;
  onReject?: () => void;
  loan: Loan;
}

export const LoanDetails: FC<LoanDetailsProps> = (props) => {
  const { onEdit, onReject, loan } = props;
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

  const align = lgUp ? 'horizontal' : 'vertical';
  const createdAt = format(new Date(loan.application_time), 'dd/MM/yyyy');
  const application_time = format(new Date(loan.application_time), 'HH:mm:ss:mm');
  const statusColor = statusMap[loan.loan_status] as SeverityPillColor;
  const totalAmount = numeral(loan.amount_payable).format(`0,0.00`);

  const [payback_modal_opened, setPayback_modal_opened] = useState(false);
  const [review_modal_opened, setReview_modal_opened] = useState(false);

  const payback_modal = payback_modal_opened ? (
    <Modal
      open={payback_modal_opened}
      onClose={() => setPayback_modal_opened(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <LoanPayback
        onCancel={() => setPayback_modal_opened(false)}
        loan={loan!}
      />
    </Modal>
  ) : null;

  const review_modal = review_modal_opened ? (
    <Modal
      open={review_modal_opened}
      onClose={() => setReview_modal_opened(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <LoanReview
        onCancel={() => setReview_modal_opened(false)}
        loan={loan!}
      />
    </Modal>
  ) : null;

  return (
    <Stack spacing={6}>
      {payback_modal}
      {review_modal}
      <Stack spacing={3}>
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
          <Typography variant="h6">Details</Typography>
          <Button
            color="inherit"
            onClick={onEdit}
            size="small"
            startIcon={
              <SvgIcon>
                <Edit02Icon />
              </SvgIcon>
            }
          >
            Edit
          </Button>
        </Stack>
        <PropertyList>
          <PropertyListItem
            align={align}
            disableGutters
            divider
            label="ID"
            value={loan.id ? loan.id : 'NONE'}
          />
          <PropertyListItem
            align={align}
            disableGutters
            divider
            label="Customer Email"
          >
            <Typography
              color="text.secondary"
              variant="body2"
            >
              {loan.borrowed_by ? loan.borrowed_by : 'NONE'}
            </Typography>
          </PropertyListItem>
          <PropertyListItem
            align={align}
            disableGutters
            divider
            label="Reviewer Email"
          >
            <Typography
              color="text.secondary"
              variant="body2"
            >
              {loan.reviewed_by ? loan.reviewed_by : 'NONE'}
            </Typography>
          </PropertyListItem>
          <PropertyListItem
            align={align}
            disableGutters
            divider
            label="Percent Interest"
          >
            <Typography
              color="text.secondary"
              variant="body2"
            >
              {loan.percent_interest ? loan.percent_interest : 'NONE'}
            </Typography>
          </PropertyListItem>
          <PropertyListItem
            align={align}
            disableGutters
            divider
            label="Disbursed Amount"
          >
            <Typography
              color="text.secondary"
              variant="body2"
            >
              {loan.disbursed_amount ? loan.disbursed_amount : 'NONE'}
            </Typography>
          </PropertyListItem>
          <PropertyListItem
            align={align}
            disableGutters
            divider
            label="Fines Accumulated"
          >
            <Typography
              color="text.secondary"
              variant="body2"
            >
              {loan.fines_accumulated ? loan.fines_accumulated : 'NONE'}
            </Typography>
          </PropertyListItem>
          <PropertyListItem
            align={align}
            disableGutters
            divider
            label="Amount payable"
          >
            <Typography
              color="text.secondary"
              variant="body2"
            >
              {loan.amount_payable ? loan.amount_payable : 'NONE'}
            </Typography>
          </PropertyListItem>
          <PropertyListItem
            align={align}
            disableGutters
            divider
            label="Payment interval"
          >
            <Typography
              color="text.secondary"
              variant="body2"
            >
              {loan.payment_intervals ? loan.payment_intervals : 'NONE'}
            </Typography>
          </PropertyListItem>
          <PropertyListItem
            align={align}
            disableGutters
            divider
            label="Cumulative payments"
          >
            <Typography
              color="text.secondary"
              variant="body2"
            >
              {loan.cumulative_payments ? loan.cumulative_payments : 'NONE'}
            </Typography>
          </PropertyListItem>
          <PropertyListItem
            align={align}
            disableGutters
            divider
            label="Principal"
            value={loan.principal ? loan.principal : 'NONE'}
          />
          <PropertyListItem
            align={align}
            disableGutters
            divider
            label="Balance Payable"
            value={loan.balance_payable ? loan.balance_payable : 'N/A'}
          />
          <PropertyListItem
            align={align}
            disableGutters
            divider
            label="Total Amount"
            value={totalAmount}
          />
          <PropertyListItem
            align={align}
            disableGutters
            divider
            label="Status"
          >
            <SeverityPill color={statusColor}>
              {loan.loan_status ? loan.loan_status : 'NONE'}
            </SeverityPill>
          </PropertyListItem>
          <PropertyListItem
            align={align}
            disableGutters
            divider
            label="Disbursed Date"
          >
            <Typography
              color="text.secondary"
              variant="body2"
            >
              {loan.disbursed_date
                ? new Date(loan.disbursed_date).toDateString() +
                  ' ' +
                  new Date(loan.disbursed_date).toLocaleTimeString()
                : 'N/A'}
            </Typography>
          </PropertyListItem>
          <PropertyListItem
            align={align}
            disableGutters
            divider
            label="Comments"
          >
            <Typography
              color="text.secondary"
              variant="body2"
            >
              {loan.comments ? loan.comments : 'NONE'}
            </Typography>
          </PropertyListItem>
          <PropertyListItem
            align={align}
            disableGutters
            divider
            label="Review notes"
          >
            <Typography
              color="text.secondary"
              variant="body2"
            >
              {loan.review_notes ? loan.review_notes : 'NONE'}
            </Typography>
          </PropertyListItem>
          <PropertyListItem
            align={align}
            disableGutters
            divider
            label="Due date"
          >
            <Typography
              color="text.secondary"
              variant="body2"
            >
              {loan.due_date ? new Date(loan.due_date).toLocaleDateString() : 'NONE'}
            </Typography>
          </PropertyListItem>
        </PropertyList>
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
        >
          <Button
            fullWidth
            color="warning"
            onClick={() => setReview_modal_opened(true)}
            size="small"
            variant="outlined"
          >
            Review
          </Button>
          <Button
            fullWidth
            color="success"
            onClick={() => setPayback_modal_opened(true)}
            size="small"
            variant="outlined"
          >
            Payback
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

LoanDetails.propTypes = {
  onReview: PropTypes.func,
  onEdit: PropTypes.func,
  onReject: PropTypes.func,
  // @ts-ignore
  loan: PropTypes.object,
};
