import { TIMEZONE_OFFSETS } from '../constants/timezones';

export const getOffsets = (start = -12, end = +12) => {
  let offsets = [];
  for (let i = start; i < end; i += 0.5) {
    offsets.push(i);
  }
  return offsets;
};

export const getTimezones = () => {
  return ['UTC', 'GMT', ...Object.keys(TIMEZONE_OFFSETS)];
};
