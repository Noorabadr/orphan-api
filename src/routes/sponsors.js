const express = require('express');
const controller = require('../controllers/sponsorController');

const router = express.Router();

router.get('/', controller.getAllSponsors);
router.get('/:id', controller.getSponsor);
router.post('/', controller.createSponsor);
router.put('/:id', controller.updateSponsor);
router.delete('/:id', controller.deleteSponsor);

module.exports = router;