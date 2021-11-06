const {Router} = require('express');
const {emprendedorGet,emprendedorPost,emprendedorPut} = require('d:/Back/controllers/emprendedor');
const router = Router();

//rutas
router.get('/', emprendedorGet);

router.post('/', emprendedorPost);

router.put('/:cedulaEmprendedor', emprendedorPut);


module.exports = router;