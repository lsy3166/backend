const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
global.Task = require("./api/models/taskModel");
const routes = require("./api/routes/taskRoutes");

mongoose.Promise = global.Promise;
mongoose.set("useFindAndModify", false);
// mongoose.connect("mongodb://localhost/Vuecrudapp", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.gvacb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);
// .then(() => {
//   app.listen("3000", () => console.log("listening to port 3000"));
// })
// .catch((err) => console.log(err));

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);
app.listen(port);

app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

console.log(`Server started on port ${port}`);
