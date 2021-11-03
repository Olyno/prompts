'use strict';

import * as datepart from './datepart';
import * as day from './day';
import * as hours from './hours';
import * as meridiem from './meridiem';
import * as milliseconds from './milliseconds';
import * as minutes from './minutes';
import * as month from './month';
import * as seconds from './seconds';
import * as year from './year';

export default {
  DatePart: datepart,
  Meridiem: meridiem,
  Day: day,
  Hours: hours,
  Milliseconds: milliseconds,
  Minutes: minutes,
  Month: month,
  Seconds: seconds,
  Year: year,
}
