const express = require("express");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();

//Parse incoming string or array data
app.use(express.urlencoded({extended: true}));

//Parse incoming JSON data
app.use(express.json());

//Make routes available for the static public pages
app.use(express.static("public"));


//HTML routes...
//GET routes
app.get("/", (req, res) => {
    console.log("Homepage get route");
    res.sendFile(path.join(__dirname, "./public/utils/character-test.html"));
});

//Catch-all Route
app.get("*", (req, res) => {
    console.log("Incorrect route");
    res.sendFile(path.join(__dirname, "./public/utils/character-test.html"));
});

//API routes...
//GET routes...

//GET route for a specific character
app.get("./api/character/:id", (req, res) => {
    let charID = [req.params.id];
    console.log("Character route for "+charID);
    
    let characters = JSON.parse("./db/characters.json");
    res.json(characters[charID]);
});

//GET route for all characters
app.get("./api/characters", (req, res) => {
    console.log("GET route for all characters");
    
    let characters = JSON.parse("./db/characters.json");
    res.json(characters);
});

//POST routes
//POST a character to the database
app.post("./api/characters", (req, res) => {
    let character = req.body;

    let charactersArray = JSON.parse("./db/characters.json");
    charactersArray.push(character);

    fs.writeFileSync(path.join(__dirname, "./db/characters.json"), JSON.stringify(charactersArray, null, 4), (err) => {
        if (err) {
            throw err;
        }
        console.log("Successfully wrote character to db.json");
    });
});


//Listen
app.listen(PORT, () => console.log("Listening on port "+PORT));