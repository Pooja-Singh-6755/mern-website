const mongoose = require("mongoose");
const DB = process.env.DATABASE;


mongoose.connect(DB).then(() => {
    console.log(`Connection to the database successful`);
}).catch((error) => {
    console.error(`Error connecting to the database: ${error.message}`);
});