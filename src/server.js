const Express = require('express');
const Chokidar = require('chokidar');
const Cors = require('cors');
const Jsonserver = require('json-server');

const filename = process.argv[2] || './data.js';
const port = process.argv[3] || 3500;

let router = undefined;

const app = Express();

const createServer = () => {
    delete require.cache[require.resolve(filename)];
    setTimeout(() => {
        router = Jsonserver.router(filename.endsWith('.js') ? require(filename)() : filename);
    }, 100);
}

createServer();

app.use(Cors());
app.use(Jsonserver.bodyParser);
app.use('/api', (request, response, next) => router(request, response, next));

Chokidar.watch(filename).on('change', () => {
    console.log('Reload server');
    createServer();
    console.log('Server loaded');
});

app.listen(port, () => console.log('Server is running on port ' + port));