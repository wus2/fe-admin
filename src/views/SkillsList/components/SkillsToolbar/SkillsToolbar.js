import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { SearchInput } from 'components';

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  }
}));

const ProductsToolbar = props => {
  const { className, ...rest } = props;

  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const classes = useStyles();

  const handleCloseAddDialog = () => {
    setAddDialogOpen(false);
  }

  const handleOpenAddDialog = () => {
    setAddDialogOpen(true);
  }

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.row}>
        <span className={classes.spacer} />
        <Button
          color="primary"
          variant="contained"
          onClick={handleOpenAddDialog}
        >
          Add skill
        </Button>
        <Dialog open={addDialogOpen} onClose={handleCloseAddDialog} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Add new skill</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To add new skill, please enter skill name and description here.
          </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Skill name"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Description"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseAddDialog} color="primary">
              Cancel
          </Button>
            <Button onClick={handleCloseAddDialog} color="primary">
              Add
          </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div className={classes.row}>
        <SearchInput
          className={classes.searchInput}
          placeholder="Search product"
        />
      </div>
    </div >
  );
};

ProductsToolbar.propTypes = {
  className: PropTypes.string
};

export default ProductsToolbar;
