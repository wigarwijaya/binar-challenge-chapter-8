const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

const swaggerJSON = require("./swagger.json");
const swaggerUI = require("swagger-ui-express");

app.use("/", swaggerUI.serve, swaggerUI.setup(swaggerJSON));

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// accept request in form or JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = require("./Server/models");
db.client.sync();

require("./Server/routes/player.routes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
