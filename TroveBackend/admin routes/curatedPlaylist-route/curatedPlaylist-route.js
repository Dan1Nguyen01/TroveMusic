const express = require('express');
const router = express.Router();
const cron = require("node-cron");
const CuratedPlaylist = require("../../models/curatedPlaylist model/curatedPlaylist-model");


const {
    getAllCuratedPlaylist,
    getACuratedPlaylist,
    generateCuratedPlaylists,
} = require('../../admin controllers/curatedPlaylist/curatedPlaylistController');

router.get('/', getAllCuratedPlaylist);

router.get('/:id', getACuratedPlaylist);

router.post('/', generateCuratedPlaylists);


cron.schedule("* * * * *", async (req, res) => {
    try {
        //await CuratedPlaylist.deleteOne({curatedPlaylistName: "For You"})
        await generateCuratedPlaylists();
        console.log("generated curated playlists!");
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;