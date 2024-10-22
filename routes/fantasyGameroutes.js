const express = require('express');

const router = express.Router();

//import controller
const {allPlayer} = require("../controllers/playerController");
const {createANewTeams} = require("../controllers/teamController");
const {findTeamByID} = require("../controllers/teamController");
const {allTeams} = require("../controllers/teamController");
const {createPlayer} = require("../controllers/newplayer");



//define APIs route
router.get("/allplayer",allPlayer);
router.post("/createplayer",createPlayer);
router.post("/createnewteam",createANewTeams);
router.get("/findteam",findTeamByID);
router.get("/allTeams",allTeams);

module.exports = router ;