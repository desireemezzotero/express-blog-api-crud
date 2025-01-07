const express = require('express');
const routers = express.Router();
const postControlls = require('../controllers/postControllers')

routers.get('/', postControlls.index);
routers.get('/:id', postControlls.show);
routers.post('/', postControlls.store);
routers.put('/:id',postControlls.update);
routers.patch('/:id',postControlls.modify);
routers.delete('/:id',postControlls.destory);

module.exports = routers