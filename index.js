const express = require('express');
const app = express();
require('dotenv').config();
const { createPlayer } = require('./controllers/newplayer');
const { allPlayer } = require('./controllers/playerController');
const { createANewTeams } = require('./controllers/teamController');
const { findTeamByID } = require('./controllers/teamController');
const { allTeams } = require('./controllers/teamController');
const fantasyGameroutes = require('./routes/fantasyGameroutes');
const dbConnect = require('./config/database');
const cors = require('cors');

// Middleware
app.use(cors());
app.use(express.json());

// Call the database connection
dbConnect();

// Mount routes
app.use("/api/v1/", fantasyGameroutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started at ${port} successfully`);
});

// Simple homepage route
app.get("/", (req, res) => {
    res.send("This is my homepage baby");
});

// Use POST for creating a new player
app.post("/createnew", createPlayer);
app.get("/allplayer",allPlayer);
app.post("/createnewteam",createANewTeams);
app.get("/findteam/:id", findTeamByID);
app.get("/allTeams",allTeams);