const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

// DATA TYPES
const num = 1;
const array = [0,1,2,3,4,5,6,7,"pear"]
const string =  "apple"
const object = {name: 'Taylor', cash: '10k'}
let block = [{hash:'14114313',id: 1}, object]

// for loop
function looper(){
    for (let index = 0; index < array.length; index++) {
        console.log(index + ' ' + array[index]);
    }
}

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    console.log(num);
    console.log(array);
    console.log(string);
    console.log(object);
    console.log(block);
    console.log(looper());
});
