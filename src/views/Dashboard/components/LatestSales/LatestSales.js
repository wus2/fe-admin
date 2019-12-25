import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import palette from 'theme/palette';

import { data, data1, options } from './chart';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useSelector } from 'react-redux';
const useStyles = makeStyles(theme => ({
  root: {},
  chartContainer: {
    height: 400,
    position: 'relative'
  },
  actions: {
    justifyContent: 'flex-end'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const LatestSales = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const { dayRevenue, weekRevenue, monthRevenue, topDayRevenue, topWeekRevenue, topMonthRevenue } = useSelector(state => state.Revenue)
  const [revenue, setRevenue] = useState(undefined);
  const [type, setType] = useState('total');
  const [time, setTime] = useState('day');

  const handleTypeChange = event => {
    setType(event.target.value);
    if (time === 'day') {
      switch (event.target.value) {
        case 'total':
          setRevenue(dayRevenue);
          break;
        case 'tutor':
          setRevenue(topDayRevenue);
          break;
      }
    } else if (time === 'week') {
      switch (event.target.value) {
        case 'total':
          setRevenue(weekRevenue);
          break;
        case 'tutor':
          setRevenue(topWeekRevenue);
          break;
      }
    } else {
      switch (event.target.value) {
        case 'total':
          setRevenue(monthRevenue);
          break;
        case 'tutor':
          setRevenue(topMonthRevenue);
          break;
      }
    }
  }

  const handleTimeChange = event => {
    setTime(event.target.value);
    if (type === 'total') {

      switch (event.target.value) {
        case 'day':
          setRevenue(dayRevenue);
          break;
        case 'week':
          setRevenue(weekRevenue);
          break;
        case 'month':
          setRevenue(monthRevenue);
          break;
      }
    } else {
      switch (event.target.value) {
        case 'day':
          setRevenue(topDayRevenue);
          break;
        case 'week':
          setRevenue(topWeekRevenue);
          break;
        case 'month':
          setRevenue(topMonthRevenue);
          break;
      }
    }
  }


  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        action={
          <>
            <FormControl variant="outlined" className={classes.formControl}>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={type}
                onChange={handleTypeChange}
              >
                <MenuItem value={'total'}>Total</MenuItem>
                <MenuItem value={'tutor'}>Tutor</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={time}
                onChange={handleTimeChange}
              >
                <MenuItem value={'day'}>Day</MenuItem>
                <MenuItem value={'week'}>Week</MenuItem>
                <MenuItem value={'month'}>Month</MenuItem>
              </Select>
            </FormControl>
          </>
        }
        title="Revenue review"
      />
      <Divider />
      <CardContent>
        <div className={classes.chartContainer}>
          <Bar
            data={revenue ? revenue : dayRevenue}
            options={options}
          />
        </div>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button
          color="primary"
          size="small"
          variant="text"
        >
          Overview <ArrowRightIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

LatestSales.propTypes = {
  className: PropTypes.string
};

export default LatestSales;
