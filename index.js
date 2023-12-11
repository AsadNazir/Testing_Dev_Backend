const express = require("express");
const app = express();
//cors 
// const cors = require("cors");
// app.use(cors());

const router = express.Router();
const userRouter = require("./routes/user.route.js");

//user request
app.use("/user", userRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000.");
}
)