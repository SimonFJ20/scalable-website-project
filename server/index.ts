import express from 'express';
import cors from 'cors';
import path from 'path';

import routes from './routes';

const server = express();
const port = 80;
server.use(cors());
server.use(express.json());

server.use('/', routes);
server.use(express.static(path.join(__dirname, '../public/dist')))

server.listen(port, () => {
    console.log('Express on', port);
});
