import { addMinutes } from 'date-fns';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { TIMEZONE_OFFSET } from '../constants/timezones';

/**
 *
 * @param {string} timezone - optional | any of UTC, GMT, PST, EST, EDT, BST, MST
 * @param {number} offset - optional | only when timezone is UTC & GMT
 * @returns {object} object - { date, utcDate, offset, timezone }
 */
const useClock = (timezone, offset = 0) => {
  const [localDate, setLocalDate] = useState(null);
  const [localTimezone, setLocalTimezone] = useState('');
  const [localOffset, setLocalOffset] = useState(0);
  const [utc, setUTC] = useState(null);

  useEffect(() => {
    let date = new Date();
    const offset = date.getTimezoneOffset();
    date = addMinutes(date, offset);
    setUTC(date);
    setLocalOffset(offset);
  }, []);

  useEffect(() => {
    if (utc !== null) {
      if (timezone) {
        if (timezone === 'UTC' || timezone === 'GMT') {
          offset = TIMEZONE_OFFSET[timezone] ?? offset * 60;
        } else {
          offset = TIMEZONE_OFFSET[timezone] ?? 0;
        }

        const newUTC = addMinutes(utc, offset);
        setLocalDate(newUTC);
        setLocalTimezone(timezone);
      } else {
        const newUTC = addMinutes(utc, -localOffset);
        setLocalDate(newUTC);
        const utcString = newUTC.toUTCString().split(' ');
        setLocalTimezone(utcString.pop());
      }
    }
  }, [utc, timezone, offset]);

  // TEST LOG
  console.log(`${timezone} ${offset} >> `, localDate);

  return {
    date: localDate,
    utcDate: utc,
    offset: offset || localOffset,
    timezone: timezone || localTimezone,
  };
};
useClock.propTypes = {
  timezone: PropTypes.string,
  offset: PropTypes.number,
};

export default useClock;
