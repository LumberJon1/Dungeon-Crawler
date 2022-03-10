const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();

//Parse incoming string or array data
app.use(express.urlencoded({extended: true}));

//Parse incoming JSON data
app.use(express.json());

//Make routes available for the static public pages
app.use(express.static("public"));

//Allow cors
app.use(cors());


//HTML routes...
//GET routes
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "/public/index.html")));


//API routes...
//GET routes...

//GET route for a specific character
app.get("/api/character/:id", (req, res) => {
    let charID = [req.params.id];
    console.log("Character route for "+charID);

    let charactersArray = [];

    //Get the db.json file
    fs.readFile(path.join(__dirname, "/db/characters.json"), "utf8", (err, data) => {
        if (err) {
            throw err;
        }
        if (data) {
            charactersArray = JSON.parse(data);
        }
    });
    
    res.json(charactersArray[charID]);
});

//GET route for all characters
app.get("/api/characters", (req, res) => {
    console.log("GET route for all characters");

    let charactersArray = [];

    //Get the db.json file
    fs.readFile(path.join(__dirname, "/db/characters.json"), "utf8", (err, data) => {
        if (err) {
            throw err;
        }
        if (data) {
            charactersArray.push(JSON.parse(data));
            console.log("Parsed "+data);      
            res.json(charactersArray);
        }
    });
});

//POST routes
//POST a character to the database
app.post("/api/characters", (req, res) => {
    let character = req.body;
    
    //Get the db.json file
    fs.readFile(path.join(__dirname, "/db/characters.json"), "utf8", (err, data) => {
        if (err) {
            throw err;
        }
        if (data) {
            let charactersArray = JSON.parse(data);
            
            charactersArray.push(character);
            fs.writeFileSync(path.join(__dirname, "/db/characters.json"), JSON.stringify(charactersArray, null, 4), (err) => {
                if (err) {
                    throw err;
                }
            });
            
        }
    });
    console.log("Successfully wrote character to db");
    res.send("Successfully wrote character to db");
    
});

//Catch-all Route
app.get("*", (req, res) => {
    console.log("Incorrect route");
    res.sendFile(path.join(__dirname, "/public/character-test.html"));
});

//Listen
app.listen(PORT, () => console.log("Listening on port "+PORT));
