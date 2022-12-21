import nyancat from './nyancat.jpg';

// document.addEventListener('DOMContentLoaded', () => {
//   document.body.innerHTML = `<img src="${nyancat}" />`;
// });

// console.log(process.env.NODE_ENV);
// console.log(TWO);
// console.log(API_DOMAIN);
import './app.css';
import axios from 'axios';
import sum from './math';

console.log(sum(1, 2));

document.addEventListener('DOMContentLoaded', async () => {
  const res = await axios.get('/api/users');

  document.body.innerHTML = (res.data || [])
    .map((user) => {
      return `<div>${user.id} ${user.name}</div>`;
    })
    .join('');
});
