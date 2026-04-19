const express = require('express');
const controller = require('../controllers/orphanController');

const router = express.Router();

router.get('/', controller.getAllOrphans);
router.get('/:id', controller.getOrphan);
router.post('/', controller.createOrphan);
router.put('/:id', controller.updateOrphan);
router.delete('/:id', controller.deleteOrphan);

module.exports = router;