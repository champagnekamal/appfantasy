

const Team = require('../models/Team');

exports.createANewTeams = async (req, res) => {
    try {
        const { name, players,totalPoints } = req.body;

        // Validate input data
        if (!name || players.length == 0) {
            return res.status(400).json({
                success: false,
                message: "Please provide team name and select at least one player."
            });
        }

        // Validate players array (each object should have playerId and playerName)
        for (const player of players) {
            if (!player.playerId || !player.playerName) {
                return res.status(400).json({
                    success: false,
                    message: "Each player must have a playerId and playerName."
                });
            }
        }

        // Create the new team with the provided players
        const newTeam = new Team({
            name,
            players,
            totalPoints  // Set initial points to 0
        });

        // Save the team to the database
        await newTeam.save();

        res.status(201).json({
            success: true,
            data: newTeam,
            message: "Team created successfully."
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};


//  Retrieve a specific team by ID
exports.findTeamByID =  async (req, res) => {
    try {
        console.log(req.params);
        const {id} = req.params;
        const team = await Team.findById({_id : id})
        console.log(team);
        // const players = 
        if (!team) {
            return res.status(404).json({
                success : false ,
                message : "There is no team with this ID"
            })
        }

        res.status(200).json({
            success : true ,
            data : team,
            message : `team ${id} successfully fetched`
        })
    } 

    catch (err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success: false ,
            data : "internal server error",
            message : err.message
        })
    }
}

exports.allTeams =  async (req, res) => {
    try {
        const TeamLIST = await Team.find();
        res.status(200)
        .json({
            success: true ,
            data : TeamLIST,
            message :'entire Team fetched'
        })
    } 
    
    catch (err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success: false ,
            data : "internal server error",
            message : err.message
        })
    }
}