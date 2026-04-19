const service = require('../services/orphanService');

async function getAllOrphans(req, res) {
    try {
        res.json(await service.getAllOrphans());
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function getOrphan(req, res) {
    try {
        const orphan = await service.getOrphan(req.params.id);
        if (!orphan) return res.status(404).json({ message: "Not found" });

        res.json(orphan);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function createOrphan(req, res) {
    try {
        res.json(await service.createOrphan(req.body));
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function updateOrphan(req, res) {
    try {
        res.json(await service.updateOrphan(req.params.id, req.body));
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function deleteOrphan(req, res) {
    try {
        await service.deleteOrphan(req.params.id);
        res.sendStatus(204);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = {
    getAllOrphans,
    getOrphan,
    createOrphan,
    updateOrphan,
    deleteOrphan
};