const jwt = require('jsonwebtoken');

const secret = 'mySecret';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY1ODM3MjYzOX0.-djmOj8moh69Yqpuaolu9ZygLQA3sHGVzpqNTAx7aww';

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);
