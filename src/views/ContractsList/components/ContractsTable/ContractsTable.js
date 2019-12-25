import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination
} from '@material-ui/core';

import { getInitials } from 'helpers';
import Moment from 'core/utils/TimeUtil';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const ContractsTable = props => {
  const { className, contracts, ...rest } = props;

  const classes = useStyles();

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = event => {
    const { contracts } = props;

    let selectedUsers;

    if (event.target.checked) {
      selectedUsers = contracts.map(user => user.id);
    } else {
      selectedUsers = [];
    }

    setSelectedUsers(selectedUsers);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedUsers.indexOf(id);
    let newSelectedUsers = [];

    if (selectedIndex === -1) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers, id);
    } else if (selectedIndex === 0) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(1));
    } else if (selectedIndex === selectedUsers.length - 1) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedUsers = newSelectedUsers.concat(
        selectedUsers.slice(0, selectedIndex),
        selectedUsers.slice(selectedIndex + 1)
      );
    }

    setSelectedUsers(newSelectedUsers);
  };

  const handlePageChange = (event, page) => {
    setPage(page);
  };

  const handleRowsPerPageChange = event => {
    setRowsPerPage(event.target.value);
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Tutor</TableCell>
                  <TableCell>Tutee</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Start</TableCell>
                  <TableCell>Rent</TableCell>
                  <TableCell>Rent price</TableCell>
                  <TableCell>Create time</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Stars</TableCell>
                  <TableCell>Comment</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {contracts.slice(0, rowsPerPage).map(contract => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={contract.cid}
                    selected={selectedUsers.indexOf(contract.id) !== -1}
                  >
                    <TableCell>{contract.tutor_id}</TableCell>
                    <TableCell>{contract.tutee_id}</TableCell>
                    <TableCell>{contract.desc}</TableCell>
                    <TableCell>{Moment(contract.start_time).format('DD/MM/YYYY')}</TableCell>
                    <TableCell>{contract.rent_time}h</TableCell>
                    <TableCell>{contract.rent_price}VND</TableCell>
                    <TableCell>{Moment(contract.create_time * 1000).format('DD/MM/YYYY')}</TableCell>
                    <TableCell>{contract.status}</TableCell>
                    <TableCell>{contract.stars}</TableCell>
                    <TableCell>{contract.comment}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <CardActions className={classes.actions}>
        <TablePagination
          component="div"
          count={contracts.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </CardActions>
    </Card>
  );
};

ContractsTable.propTypes = {
  className: PropTypes.string,
  contracts: PropTypes.array.isRequired
};

export default ContractsTable;
