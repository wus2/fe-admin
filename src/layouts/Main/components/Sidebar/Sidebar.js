import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ImageIcon from '@material-ui/icons/Image';
import SettingsIcon from '@material-ui/icons/Settings';
import UserListActions from 'reduxs/listUser/index';
import SkillListActions from 'reduxs/listSkill/index';
import ContractListActions from 'reduxs/listContract/index';
import RevenueActions from 'reduxs/revenue/index';

import { Profile, SidebarNav } from './components';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();
  const dispatch = useDispatch();

  dispatch(UserListActions.getList());
  dispatch(SkillListActions.getList());
  dispatch(ContractListActions.getList());
  dispatch(RevenueActions.getDayRevenue());
  dispatch(RevenueActions.getWeekRevenue());
  dispatch(RevenueActions.getMonthRevenue());
  dispatch(RevenueActions.getTopDayTutorRevenue());
  dispatch(RevenueActions.getTopWeekTutorRevenue());
  dispatch(RevenueActions.getTopMonthTutorRevenue());

  const pages = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: <DashboardIcon />
    },
    {
      title: 'Users',
      href: '/users',
      icon: <PeopleIcon />
    },
    {
      title: 'Skills',
      href: '/skills',
      icon: <ShoppingBasketIcon />
    },
    {
      title: 'Contracts',
      href: '/contracts',
      icon: <ImageIcon />
    },
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
