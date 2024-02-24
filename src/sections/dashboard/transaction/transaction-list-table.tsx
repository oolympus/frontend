import type { ChangeEvent, FC, MouseEvent } from 'react';
import { Fragment, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import { Scrollbar } from 'src/components/scrollbar';
import type { Transaction } from 'src/types/transaction';
import useRequest from 'src/hooks/use-request';

interface TransactionListTableProps {
  count?: number;
  items?: Transaction[];
  onPageChange?: (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
  onRowsPerPageChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  page?: number;
  rowsPerPage?: number;
}

export const TransactionListTable: FC<TransactionListTableProps> = (props) => {
  const {
    count = 0,
    items = [],
    onPageChange = () => {},
    onRowsPerPageChange,
    page = 0,
    rowsPerPage = 0,
  } = props;

  const request = useRequest();

  const [initiated_by, setInitiated_by] = useState('');

  const handleGetInitiatedBy = useCallback(
    (id: string) => {
      request.get(`/users/${id}`).then((res) => {
        setInitiated_by(res.data.username);
      });
    },
    [request]
  );

  return (
    <div>
      <Scrollbar>
        <Table sx={{ minWidth: 1200, maxHeight: 1000 }}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Platform</TableCell>
              <TableCell>Channel</TableCell>
              <TableCell>Initiated By</TableCell>
              <TableCell>Comments</TableCell>
              <TableCell>Closing Loan Balance</TableCell>
              <TableCell>Recorded by</TableCell>
              <TableCell>Loan</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Updated At</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items?.map((transaction) => {
              return (
                <Fragment key={transaction.id}>
                  <TableRow
                    hover
                    key={transaction.id}
                  >
                    <TableCell>{transaction?.id?.slice(0, 8) + '...'}</TableCell>
                    <TableCell>{transaction?.amount}</TableCell>
                    <TableCell>{transaction?.platform}</TableCell>
                    <TableCell>{transaction?.channel}</TableCell>
                    <TableCell>{transaction?.initiated_by}</TableCell>
                    <TableCell>{transaction?.comments}</TableCell>
                    <TableCell>{transaction?.closing_loan_balance}</TableCell>
                    <TableCell>{transaction?.recorded_by?.slice(0, 8) + '...'}</TableCell>
                    <TableCell>{transaction?.loan?.slice(0, 8) + '...'}</TableCell>
                    <TableCell>{new Date(transaction?.created_at)?.toLocaleDateString()}</TableCell>
                    <TableCell>{new Date(transaction?.updated_at)?.toLocaleDateString()}</TableCell>
                  </TableRow>
                </Fragment>
              );
            })}
          </TableBody>
        </Table>
      </Scrollbar>
      <TablePagination
        component="div"
        count={count}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </div>
  );
};

TransactionListTable.propTypes = {
  count: PropTypes.number,
  items: PropTypes.array,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
};
