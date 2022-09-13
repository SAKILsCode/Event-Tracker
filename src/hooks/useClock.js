import { addMinutes } from 'date-fns';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { TIMEZONE_OFFSETS } from '../constants/timezones';

/**
 * Accepts Timezone and Offset and returns { date, utcDate, offset, timezone }
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

    // get negative offset (Bangladesh is 360 min ahead of UTC time but 'getTimezoneOffset' returns -360)
    const offset = date.getTimezoneOffset();
    date = addMinutes(date, offset);

    setUTC(date);

    // making localOffset like "useClock" user input offset value like "+6" of "GMT +6"
    setLocalOffset(-(offset / 60));
  }, []);

  useEffect(() => {
    if (utc !== null) {
      if (timezone) {
        if (timezone !== 'UTC' && timezone !== 'GMT') {
          offset = TIMEZONE_OFFSETS[timezone] ?? 0;
        }

        if (offset > 12 || offset < -12) {
          offset = 0;
        }

        const newUTC = addMinutes(utc, offset * 60);
        setLocalDate(newUTC);
      } else {
        const newUTC = addMinutes(utc, localOffset * 60);
        setLocalDate(newUTC);
        const utcString = newUTC.toUTCString().split(' ');
        setLocalTimezone(utcString.pop());
      }
    }
  }, [utc, timezone, offset]);

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
