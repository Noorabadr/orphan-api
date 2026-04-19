const db = require('../../models');
const Sponsor = db.Sponsor;

async function getAllSponsors() {
    try {
        return await Sponsor.findAll();
    } catch (err) {
        throw err;
    }
}

async function getSponsor(id) {
    try {
        return await Sponsor.findByPk(id);
    } catch (err) {
        throw err;
    }
}

async function createSponsor(data) {
    try {
        return await Sponsor.create(data);
    } catch (err) {
        throw err;
    }
}

async function updateSponsor(id, data) {
    try {
        const sponsor = await Sponsor.findByPk(id);
        if (!sponsor) throw new Error("Sponsor not found");

        await sponsor.update(data);
        return sponsor;
    } catch (err) {
        throw err;
    }
}

async function deleteSponsor(id) {
    try {
        const sponsor = await Sponsor.findByPk(id);
        if (!sponsor) throw new Error("Sponsor not found");

        await sponsor.destroy();
    } catch (err) {
        throw err;
    }
}

module.exports = {
    getAllSponsors,
    getSponsor,
    createSponsor,
    updateSponsor,
    deleteSponsor
};