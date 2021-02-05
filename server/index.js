const express = require('express');
const cors = require('cors');
const path = require('path');

const server = express();
const port = 80;
server.use(cors());
server.use(express.json());
server.use(express.static(path.join(__dirname, 'public/dist')));

server.listen(port, () => {
    console.log('Express on', port);
});