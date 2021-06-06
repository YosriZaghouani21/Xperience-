const router = require('express').Router();
const reclamationController = require('../controllers/reclamation.controller');

router.route('/').post(reclamationController.addReclamation);
router.route('/:id').get(reclamationController.getSingleReclamation);
router.route('/').get(reclamationController.getReclamations);

module.exports = router;
