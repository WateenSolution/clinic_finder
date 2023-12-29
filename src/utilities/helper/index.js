import {Alert} from 'react-native';
import {colors, bar_data_talob, pie_data_colors} from '../../utilities';
import dayjs from 'dayjs';

const amountConverter = labelValue => {
  const sign = Math.sign(Number(labelValue));
  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e6
    ? sign * (Math.abs(Number(labelValue)) / 1.0e6).toFixed(0) + ' M'
    : // Three Zeroes for Thousands
    Math.abs(Number(labelValue)) >= 1.0e3
    ? sign * (Math.abs(Number(labelValue)) / 1.0e3) + ' K'
    : Math.abs(Number(labelValue));
};

const capitalizeFirstLetter = string => {
  return string?.charAt(0).toUpperCase() + string?.slice(1).toLowerCase();
};
const responseValidator = response => {
  Alert.alert('Error', response?.message || 'Internal Server Error');
};

const numberWithCommas = (x, currency = '') => {
  return currency + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const dateFormatter = date => {
  if (!date) {
    return '';
  }
  return dayjs(date).format('MMM D, YYYY');
};

const leadPriorityMapped = value => {
  let priority;
  switch (value) {
    case 3:
      priority = 'Low';
      break;
    case 4:
      priority = 'Medium';
      break;
    case 5:
      priority = 'High';
      break;
    default:
      priority = '';
  }
  return priority;
};

const barChartMaxValue = (array, key) => {
  let maxValue = 1000000000;

  let arrayMaxValue = Math.max(...array.map(obj => obj[key]));

  if (arrayMaxValue > 1000000000) {
  } else {
  }

  return 1000000000;
};

const changeStageName = value => {
  switch (value) {
    case 'Initial / Budgetary Quote / On hold':
      value = 'Budgetary Quote';
      break;
    default:
      value;
  }
  return value;
};

export {
  amountConverter,
  responseValidator,
  capitalizeFirstLetter,
  numberWithCommas,
  dateFormatter,
  leadPriorityMapped,
  barChartMaxValue,
  changeStageName,
};
