// Dummy code to check if everything is working from the start.
import './index.css';
import numeral from 'numeral';
import { getUsers } from './api/userApi';

const boilerplateValue = numeral(1000).format('$0,0.00');

console.log(
  `I would pay ${boilerplateValue} for this awesome JavaScript boilerplate!`
);

// Populate a table of users via API call
getUsers().then((result) => {
  let usersBody = '';

  result.forEach((user) => {
    usersBody += `<tr>
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
      </tr>`;
  });

  global.document.getElementById('users').innerHTML = usersBody;
});
