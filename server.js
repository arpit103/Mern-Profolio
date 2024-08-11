const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

//dotenv configuaration
dotenv.config();

//rest object
const app = express();

//midlewares
app.use(cors());
app.use(express.json());

//routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoutes"));

//port

const PORT = process.env.PORT || 8087;

//listen
app.listen(PORT, () => {
  console.log(`Server Running On PORT ${PORT} `);
});
