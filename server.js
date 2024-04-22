// SIMPLE WEB SERVER FROM SCRATCH

const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;

    // An Property to get method's value from request
    // const method = request.method
    //     or
    const { method } = request;

    if (method === "GET") {
        response.end('<h1>Hello!</h1>');
    }

    if (method === "POST") {
        let body = [];

        request.on('data', (chunk) => {
            body.push(chunk);
        });

        request.on('end', () => {
            body.response = Buffer.concat(body).toString;
            const { name, age } = JSON.parse(body);
            response.end(`<h1>Hai, ${name}!, I'm ${age}</h1>`);
        });
    }

    // if (method === "PUT") {
    //     response.end('<h1>Bonjour!</h1>');
    // }

    // if (method === "DELETE") {
    //     response.end('<h1>Salam!</h1>');
    // }
};


const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});
