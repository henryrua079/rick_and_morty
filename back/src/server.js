require("dotenv").config();
const express = require("express");
const router = require("./routes/index")
const morgan = require("morgan")
const cors = require("cors")

const { conn } = require("./DB_connection")

const PORT = 3001;

const server = express();

server.use(express.json());
server.use(morgan('dev'));
server.use(cors());

server.use("/", router)


conn
    .sync({ alter: true })
    .then(() => {
        server.listen(PORT, () => {
            console.log("Server raised in port " + PORT);
        });
    })
    .catch((err => console.log(err)));