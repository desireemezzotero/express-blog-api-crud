const express = require('express');
const routers = express.Router();
const postControlls = require('../controllers/postControllers');
const checkControll = require('../middleware/checkControll')

routers.get('/', postControlls.index);
routers.get('/:id', postControlls.show);
routers.post('/', checkControll, postControlls.store);
routers.put('/:id',postControlls.update);
routers.patch('/:id',postControlls.modify);
routers.delete('/:id',postControlls.destory);

module.exports = routers