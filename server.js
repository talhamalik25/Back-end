const app = require("./src/app")
const connectDB = require("./src/db/db")

connectDB();

app.listen(4000, (req, res) => {
    console.log("port is running on 4000");
    
})