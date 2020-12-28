import wait from 'waait';
import to from 'await-to-js';
import { name } from 'faker';
import { formatDistance, format } from 'date-fns';
import axios from 'axios';
import { intersection, isEqual } from 'lodash';
import { check } from 'prettier';
const fakeNames = Array.from(
  { length: 10 },
  () => `${name.firstName()} ${name.lastName()}`
);

async function go() {
  console.log('going');
  await wait(200);
  console.log('ending');
}

const diff = formatDistance(new Date(), new Date(2020, 3, 4, 15, 32, 0), {
  addSuffix: true,
}); //=> 'in about 1 hour'

const date = new Date();
//january the 12th 2020
const formatted = format(date, "LLLL 'the' do yyyy");
console.log(formatted);

async function getJoke() {
  const res = await axios.get('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  });
  //   console.log(res);
}
getJoke();

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const b = [11, 65, 4, 77, 9, 8, 3, 2, 9, 10];
const intz = intersection(a, b);
console.log(intz);

const person1 = { name: 'kim' };
const person2 = { name: 'kim' };
console.log(person1.name);
console.log(isEqual(person1, person2));

function checkIfNameIsCool(name) {
  return new Promise(function (resolve, reject) {
    if (name === 'kim') {
      resolve('cool name');
      return;
    }
    reject(new Error('not a cool name!'));
  });
}

async function checkName() {
  const [err, successValue] = await to(checkIfNameIsCool('kisdf m'));
  if (err) {
    //deal w it
    console.log(err);
  } else {
    console.log(successValue);
  }
}
checkName();
