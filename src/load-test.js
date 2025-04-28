import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 100 }, // Ramp up to 50 users or how many  want
    { duration: '1m', target: 100 }, // Stay at 50 users or how many u want it to stay at
    { duration: '30s', target: 0 }, // Ramp down
  ],
};

export default function () {
  http.get('https://stack-high-pancakes-production.up.railway.app/'); // Replace with your app's URL
  sleep(1);
}