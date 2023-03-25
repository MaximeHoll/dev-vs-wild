const db = require("../models")
const asyncHandler = require("express-async-handler");
const Journal = db.journal;

const getAll = asyncHandler(async (req, res) => {
        const entries = await Journal.findAll();
        res.status(200).json(entries);
});

const getSpecific = asyncHandler(async (req, res) => {
    id_entry = req.params.id_entry
    const entry = await Journal.findByPk(id_entry)
    res.status(200).json(entry)
})

const newEntry = asyncHandler(async(req, res) => {
    const { entry, entryType, id_user } = req.body;
    if (!entry) return "The entry cannot be empty";
    if (!entryType) return "Please select a type of entry";
    const entryValue = new Journal({
        entry: entry,
        entry_type: entryType,
        id_user: id_user
    })
    res.status(200).json(entryValue)
})

module.exports = {
    getAll,
    newEntry,
    getSpecific
}