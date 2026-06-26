require("dotenv").config()
const express = require("express");
const connectDB = require("./config/db")

const app = express();

connectDB()
const authRoutes = require("./routes/auth.routes")

app.use(express.json())



app.use("/api/auth",authRoutes)

app.get("/", (req, res) => {
  res.json({message:"Welcome to omniChain"})
})






const PORT = process.env.PORT|| 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});

