import { Resend } from 'resend';
import Welcome from './Welcome';

const resend = new Resend('re_BTkbkGmj_fWZCxzki9aqvDez3wRysz1fy');

resend.emails.send({
  from: 'sheninthjr.com',
  to: 'sheninthjr@gmail.com',
  subject: 'Hello World',
  react:<Welcome/>
});