const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

/************* JWT *************/
var data = {
  id: 10
};

/* JWT: Header | Payload | Verify Signature */

var token = jwt.sign(data, 'secretabc');
console.log(token);

var decoded = jwt.verify(token, 'secretabc');
console.log('decoded:', decoded);

/************* crypto-js *************/
// var message = 'I am user number 3';
// var hash = SHA256(message).toString();
// 
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
// 
// var data = {
//   id: 4
// };
// 
// var token = {
//   data,		// same as data: data
//   hash: SHA256(JSON.stringify(data)).toString()
//   // Salting the hash -- hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };
// 
// 
// /* If data was changed (Man In the Middle) */
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();
// 
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// 
// if (resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed. Do not trust!');
// }