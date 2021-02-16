import express from 'express';
import cors from 'cors';
import path from 'path';

import routes from './routes';
import auth from './api/auth';
import misc from './api/misc';

const server = express();
const port = 80;
server.use(cors());
server.use(express.json());

server.use('/', routes);
server.use('/auth', auth);
server.use('/misc', misc);
server.use(express.static(path.join(__dirname, '../public/dist')))

server.listen(port, () => {
    console.log('Express on', port);
});
