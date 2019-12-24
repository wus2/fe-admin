import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { ContractsToolbar, ContractsTable } from './components';
import mockData from './data';

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

  const [contracts] = useState(mockData);

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
