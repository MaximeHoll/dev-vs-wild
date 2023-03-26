const db = require("../models")
const asyncHandler = require("express-async-handler");
const Journal = db.journal;

const getAll = asyncHandler(async (req, res) => {
        const entries = await Journal.findAll({order: [ ['creation_date', 'DESC']]})
        res.status(200).json(entries);
});

const getSpecific = asyncHandler(async (req, res) => {
    id_entry = req.params.id_entry
    const entry = await Journal.findByPk(id_entry)
    res.status(200).json(entry)
})

const newEntry = asyncHandler(async(req, res) => {
    const { entry, entryType, coords, user } = req.body;
    console.log(entry);
    if (!entry) return "The entry cannot be empty";
    const entryValue = Journal.create({
        entry,
        entry_type: entryType,
        entry_coords: coords,
        user
    });
    res.status(200).json(entryValue)
})

module.exports = {
    getAll,
    newEntry,
    getSpecific
}