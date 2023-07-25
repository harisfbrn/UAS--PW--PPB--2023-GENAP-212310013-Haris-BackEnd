import express from "express";
import cors from "cors";
import db from "../backend/models/index.js";
import adminRoute from "./routes/admin.routes.js";
import lapRoute from "./routes/lap.routes.js";
import userRoute from "./routes/user.routes.js";

const app = express();
const corsOptions = {
    origin: "http://localhost:4001"
};

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors(corsOptions));
app.use(userRoute);
app.use(adminRoute);
app.use(lapRoute);

const port = process.env.port||4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
    res.json({message: "Selamat datang di PGBS Server"});
});

db.sequelize.sync()
  .then(() => {
    console.log("Database Terkoneksi");
  })
  .catch((err) => {
    console.log("Gagal mengkoneksikan ke database karena : " + err.message);
  });