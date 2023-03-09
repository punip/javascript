import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime.js';
import isBetween from 'dayjs/plugin/isBetween.js'; 
import Utc from 'dayjs/plugin/utc.js';
import timeZone from 'dayjs/plugin/timezone.js';

dayjs.extend(relativeTime);
dayjs.extend(isBetween);
dayjs.extend(Utc);
dayjs.extend(timeZone);

const d1 = dayjs();
console.log(d1);

console.log(d1.year(),d1.month(),d1.date(),d1.hour(),d1.minute());

const d2 = dayjs('1999-10-10');
console.log(d2);
console.log(d2.year(),d2.month(),d2.date());

console.log(d2.format('DD-MM-YYYY'));

//console.log( `i was born ${d2.fromNow()}`);//

const oneMonthPast = d1.subtract(1,'M');
console.log(oneMonthPast);

const policyStartedPeriod = dayjs('2022-01-05');
const policyEndPeriod = ('2022-08-12');

console.log(d1.isBetween(policyStartedPeriod,policyEndPeriod));

const d10 = dayjs('2022-08-12');
console.log(d10.isBetween(policyStartedPeriod,policyEndPeriod, null, '()'));
