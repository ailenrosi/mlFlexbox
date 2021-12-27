let express = require("express");
let app = express();
let path = require("path");
let port = 3030;


app.use(express.static(path.resolve(__dirname,"./public")));

app.listen(port,() => console.log(` servidor en puerto ${port}\n http://localhost:${port}`)
);




app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname,"/views/home.html"))
});

