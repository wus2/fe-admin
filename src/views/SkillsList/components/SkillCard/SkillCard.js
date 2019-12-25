import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Divider,
  Button
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SkillListActions from 'reduxs/listSkill/index';
import { useDispatch } from 'react-redux';
const useStyles = makeStyles(theme => ({
  root: {},
  imageContainer: {
    height: 64,
    width: 64,
    margin: '0 auto',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '5px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%'
  },
  statsItem: {
    display: 'flex',
    alignItems: 'center'
  },
  statsIcon: {
    color: theme.palette.icon,
    marginRight: theme.spacing(1)
  }
}));

const ProductCard = props => {
  const { className, skill, ...rest } = props;

  const classes = useStyles();
  const dispatch = useDispatch();
  const [editDialog, setEditDialog] = useState(false);
  const [updatedSkill, setUpdatedSkill] = useState(skill);

  const handleCloseEditDialog = () => {
    setEditDialog(false);
  }

  const handleEdit = () => {
    setEditDialog(true);
  }

  const handleUpdate = skill => event => {

    const tmpSkill = { ...skill, ...updatedSkill };
    dispatch(SkillListActions.updateList(tmpSkill))
    setEditDialog(false);
  }

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <Typography
          align="center"
          gutterBottom
          variant="h4"
        >
          {skill.tag}
        </Typography>
        <Typography
          align="center"
          variant="body1"
        >
          {skill.desc ? skill.desc : 'Please update description.'}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <Grid
          container
          justify="space-between"
        >
          <Button
            className={classes.statsItem}
            item
            disabled
          >
            <Typography
              display="inline"
              variant="body2"
            >
            </Typography>
          </Button>
          <Button
            className={classes.statsItem}
            item
            onClick={handleEdit}
          >
            <EditIcon className={classes.statsIcon} />
            <Typography
              display="inline"
              variant="body2"
            >
              Edit
            </Typography>
          </Button>
        </Grid>
      </CardActions>
      <Dialog open={editDialog} onClose={handleCloseEditDialog} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit skill</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To edit skill, please enter skill name and description here.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Skill name"
            defaultValue={skill.tag}
            fullWidth
            onBlur={(event) => { setUpdatedSkill({ ...updatedSkill, tag: event.target.value }) }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Description"
            fullWidth
            defaultValue={skill.desc ? skill.desc : 'Please update description.'}
            onBlur={(event) => { setUpdatedSkill({ ...updatedSkill, desc: event.target.value }) }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleUpdate(skill)} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
  skill: PropTypes.object.isRequired
};

export default ProductCard;
