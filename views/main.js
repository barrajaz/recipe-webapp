const express = require("express"), app = express();

app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
    res.send("Welcome to Confetti Cuisine!");
});

app.use(
    express.urlencoded({
        extended: false
    })
);

app.use(app.json());

app.listen(app.get("port"), () => {
    console.log(`Server is running on port: ${app.get("port")}`)
});

