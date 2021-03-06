const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products_controller');
const autenticacion = require('../middlewares/authMiddleware');
const images = require('../middlewares/images_products');
const validator = require('../middlewares/validator');



/* GET home page. */
router.get('/', productsController.listar);
router. get('/listar_admin',autenticacion,productsController.listar_admin )

router.get('/detail/:id', productsController.mostrar);

router.get('/create', autenticacion, productsController.crear); 
router.post('/create', images.any(), validator.modifyProduct, productsController.crear_post);

router.get('/edit/:id',autenticacion, productsController.editar);
router.put('/edit/:id', images.any(), validator.modifyProduct, productsController.editar_put);

router.delete('/delete/:id',autenticacion, productsController.borrar_producto);


router.get('/sale', productsController.carrito_compras);


module.exports = router;