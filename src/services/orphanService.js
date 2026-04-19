const db = require('../../models');
const Orphan = db.Orphan;
const Sponsor = db.Sponsor;

async function getAllOrphans() {
    try {
        return await Orphan.findAll();
    } catch (err) {
        throw err;
    }
}

async function getOrphan(id) {
    try {
        return await Orphan.findByPk(id, { include: Sponsor });
    } catch (err) {
        throw err;
    }
}

async function createOrphan(data) {
    try {
        const sponsor = await Sponsor.findByPk(data.sponsorId);
        if (!sponsor) throw new Error("Sponsor not found");

        return await Orphan.create(data);
    } catch (err) {
        throw err;
    }
}

async function updateOrphan(id, data) {
    try {
        const orphan = await Orphan.findByPk(id);
        if (!orphan) throw new Error("Orphan not found");

        await orphan.update(data);
        return orphan;
    } catch (err) {
        throw err;
    }
}

async function deleteOrphan(id) {
    try {
        const orphan = await Orphan.findByPk(id);
        if (!orphan) throw new Error("Orphan not found");

        await orphan.destroy();
    } catch (err) {
        throw err;
    }
}

module.exports = {
    getAllOrphans,
    getOrphan,
    createOrphan,
    updateOrphan,
    deleteOrphan
};