const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    // Array of players containing player names and their IDs
    players: [{
        playerId: {
            type: String,   // Assuming playerId is a string from the frontend
            required: true
        },
        playerName: {
            type: String,
            required: true
        },
    }],
    totalPoints: {
        type: Number,
        required: true,
        default: 0  // Default value for new team
    }
});

module.exports = mongoose.model('Team', teamSchema);
