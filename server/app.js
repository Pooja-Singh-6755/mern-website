const dotenv = require("dotenv");
const express = require("express");
const app = express();
app.use(express.json());

dotenv.config({ path: './config.env' });
require("./db/conn")

const PORT = process.env.PORT;


const middleware = (req, res, next) => {
    console.log("its a middlewar");
    next();
}
app.use(middleware);
app.use(require("./router/auth"));


app.listen(PORT, () => {
    console.log(`server is listen port no ${PORT}`)
});