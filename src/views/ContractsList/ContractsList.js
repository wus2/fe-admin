import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { ContractsToolbar, ContractsTable } from './components';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const ContractsList = () => {
  const classes = useStyles();

  let { contracts } = useSelector(state => state.ContractList);

  if (!contracts) contracts = [];

  return (
    <div className={classes.root}>
      <ContractsToolbar />
      <div className={classes.content}>
        <ContractsTable contracts={contracts} />
      </div>
    </div>
  );
};

export default ContractsList;
