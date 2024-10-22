const Player = require('../models/Player');

exports.allPlayer =  async (req, res) => {
    try {
        const players = await Player.find();
        res.status(200)
        .json({
            success: true ,
            data : players ,
            message :'entire players fetched'
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

