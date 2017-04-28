'use strict';

const { basename, join, extname } = require('path');

const { readdirSync } = require('fs');

const { Server } = require('hapi');

const server = new Server();

const plugins = readdirSync(__dirname + '/plugins').map(file => (

    require(join(__dirname, 'plugins', file))
));

const methods = readdirSync(join(__dirname, 'methods')).reduce(
    
    (hash, file) => Object.assign({}, hash, 
        { [basename(file, extname(file))]: require(join(__dirname, 'methods', file)) }),
    {}
);

server.connection({ port: 3001, host: '0.0.0.0' });

server.route({
    method: 'POST',
    path: '/',
    handler: require(join(__dirname, 'handlers', 'json_rpc'))(methods)
});

server
    .register(plugins)
    .then(() => {
        server.start();
    })
;
