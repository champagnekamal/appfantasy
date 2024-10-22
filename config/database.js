const mongoose = require('mongoose');
require('dotenv').config();
const dbConnect = ()=> {
    mongoose.connect(process.env.database_url, {
    })
    .then(() => {
        console.log("db ka connection is successful");
    })

    .catch((error) => {
        console.log(error);
        console.log("issue in db connection");
        console.error(error.message);
        process.exit(1);
    })
}
module.exports = dbConnect;




