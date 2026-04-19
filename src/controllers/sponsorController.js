const service = require('../services/sponsorService');

async function getAllSponsors(req, res) {
    try {
        res.json(await service.getAllSponsors());
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function getSponsor(req, res) {
    try {
        const sponsor = await service.getSponsor(req.params.id);
        if (!sponsor) return res.status(404).json({ message: "Not found" });

        res.json(sponsor);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function createSponsor(req, res) {
    try {
        res.json(await service.createSponsor(req.body));
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function updateSponsor(req, res) {
    try {
        res.json(await service.updateSponsor(req.params.id, req.body));
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function deleteSponsor(req, res) {
    try {
        await service.deleteSponsor(req.params.id);
        res.sendStatus(204);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = {
    getAllSponsors,
    getSponsor,
    createSponsor,
    updateSponsor,
    deleteSponsor
};