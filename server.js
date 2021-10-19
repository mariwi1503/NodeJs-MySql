const http = require('http');
const app = require('./app') // import app daari file app.js

const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});