const Player = require('../models/Player');
// Function to create a new player
exports.createPlayer = async (req, res) => {
    try {
        // Destructure player details from the request body
        const { name, runs, position } = req.body;

        // Validate input data
        if (!name || !runs || !position) {
            return res.status(400).json({
                success: false,
                message: "All fields (name, runs, position) are required."
            });
        }

        // Create a new player document
        const newPlayer = new Player({
            name,
            runs,
            position
        });

        // Save the player to the database
        await newPlayer.save();

        // Return success response
        res.status(201).json({
            success: true,
            data: newPlayer,
            message: "Player created successfully."
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};