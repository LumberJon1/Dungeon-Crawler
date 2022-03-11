const fs = require("fs");
const Character = require("./utils/character");
const {
    logCharacter,
    displayName,
    displayClass,
    displayXP,
    displayAttributes,
    displayImage,
    displayHP,
    displayAC,
    displaySkills,
    displayEquipment,
    displayMoney,
    loadPage
} = require("./utils/character-template");


let character = new Character();

//Write the file to a character HTML page output (for now, a test page)
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./public/index.html", fileContent, err => {
            if (err) {
                reject (err);
                return;
            }
            resolve({
                ok: true,
                message: "File created."
            });
        });
    });
};

writeFile(loadPage(character));
