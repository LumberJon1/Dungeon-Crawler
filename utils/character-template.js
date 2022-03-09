const Character = require("./character.js");

const logCharacter = function(character) {
    console.log(character);
}

//Displays the character's name to the page
const displayName = (character) => {
    return character.name;
}

//Displays the character's level, race, and class to the page
const displayClass = () => {

}

//Displays the character's XP and level progress to the page
const displayXP = () => {

}

//Displays the character's attribute scores and bonuses to the page
const displayAttributes = () => {

}

//Displays the character image to the page
const displayImage = () => {

}

//Displays the character's max and current HP to the page
const displayHP = () => {
    
}

//Displays the character's AC to the page
const displayAC = () => {
    
}

//Displays the character's skills to the page
const displaySkills = () => {

}

//Displays the character's equipment to the page
const displayEquipment = () => {
    
}

//Displays the character's money to the page
const displayMoney = () => {
    
}

const loadPage = (character) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="./assets/css/style.css">
    <title>Character Sheet</title>
</head>
<body class="container-fluid">
    <header class="row">
        <h1 class="col-12 text-center p-2 bg-primary">Character Sheet</h1>
        <h2 class="col-12 p-2 text-center bg-light">${displayName(character)}</h2>
    </header>
    <main class="row">
        <div id="description-div" class="d-flex flex-column flex-sm-row align-items-center justify-content-center col-12">
            <h3 class="bg-primary text-center col-sm-4">Level:</h3>
            <h3 class="bg-primary text-center col-sm-4">Race:</h3>
            <h3 class="bg-primary text-center col-sm-4">Class:</h3>
        </div>
        <div id="xp-section-div" class="col-12 mb-2 d-flex align-items-center justify-content-between py-1 px-4 bg-secondary text-light">
            <h3>XP: 0 / 400</h3>
            <h3>Progress to level 2: 0%</h3>
        </div>

        <div id="main-content-div" class="d-flex col-12 flex-column align-items-center justify-content-center">
            <div class="border border-secondary d-flex flex-column-reverse flex-md-row col-12">
                <div id="attributes-div" class="d-flex col-md-6 flex-column align-items-center justify-content-center m-3 m-md-0">
                    <h3>Attributes</h3>
                    <div class="d-flex align-items-center justify-content-center p-2 w-100 h-100">
                        <h4>Strength: 10</h4>
                    </div>
                    <p>bonus</p>
                    <div class="d-flex align-items-center justify-content-center p-2">
                        <h4>Intelligence: 10</h4>
                    </div>
                    <p>bonus</p>
                    <div class="d-flex align-items-center justify-content-center p-2">
                        <h4>Wisdom: 10</h4>
                    </div>
                    <p>bonus</p>
                    <div class="d-flex align-items-center justify-content-center p-2">
                        <h4>Dexterity: 10</h4>
                    </div>
                    <p>bonus</p>
                    <div class="d-flex align-items-center justify-content-center p-2">
                        <h4>Constitution: 10</h4>
                    </div>
                    <p>bonus</p>
                    <div class="d-flex align-items-center justify-content-center p-2">
                        <h4>Charisma: 10</h4>
                    </div>
                    <p>bonus</p>
                </div>

                <div id="image-div" class="d-flex col-md-6 flex-column align-items-center justify-content-center">
                    <img src="./assets/images/test-img.png" alt="Character Image">
                </div>
            </div>            
        </div>
        <div id="secondary-content-div" class="col-12 d-flex justify-content-around align-items-center bg-primary">
            <div class="p-3">
            <span>HP: </span><span>14</span><span>/</span><span>14</span>
            </div>
            <div class="p-3">
            <span>Armor Class: </span><span>14</span>
            </div>
        </div>
        <div id="skills-section-div" class="d-flex flex-column col-12 align-items-between">
            <div id="skills-header-div" class="d-flex text-center bg-secondary text-white justify-content-between align-items-between p-2 w-100">
                <p class="w-50">Skill</p>
                <p class="w-50">Proficient</p>
            </div>
            <div class="d-flex text-center justify-content-between p-2 w-100">
                <p class="w-50">Acrobatics</p>
                <p class="w-50">Proficient</p>
            </div>
            <div class="d-flex text-center justify-content-between p-2 w-100">
                <p class="w-50">Animal Handling</p>
                <p class="w-50">Proficient</p>
            </div>
            <div class="d-flex text-center justify-content-between p-2 w-100">
                <p class="w-50">Arcana</p>
                <p class="w-50">Proficient</p>
            </div>
            <div class="d-flex text-center justify-content-between p-2 w-100">
                <p class="w-50">Athletics</p>
                <p class="w-50">Proficient</p>
            </div>
            <div class="d-flex text-center justify-content-between p-2 w-100">
                <p class="w-50">Skill</p>
                <p class="w-50">Proficient</p>
            </div>
            <div class="d-flex text-center justify-content-between p-2 w-100">
                <p class="w-50">Deception</p>
                <p class="w-50">Proficient</p>
            </div>
            <div class="d-flex text-center justify-content-between p-2 w-100">
                <p class="w-50">History</p>
                <p class="w-50">Proficient</p>
            </div>
            <div class="d-flex text-center justify-content-between p-2 w-100">
                <p class="w-50">Insight</p>
                <p class="w-50">Proficient</p>
            </div>
            <div class="d-flex text-center justify-content-between p-2 w-100">
                <p class="w-50">Intimidation</p>
                <p class="w-50">Proficient</p>
            </div>
            <div class="d-flex text-center justify-content-between p-2 w-100">
                <p class="w-50">Investigation</p>
                <p class="w-50">Proficient</p>
            </div>
            <div class="d-flex text-center justify-content-between p-2 w-100">
                <p class="w-50">Medicine</p>
                <p class="w-50">Proficient</p>
            </div>
            <div class="d-flex text-center justify-content-between p-2 w-100">
                <p class="w-50">Nature</p>
                <p class="w-50">Proficient</p>
            </div>
            <div class="d-flex text-center justify-content-between p-2 w-100">
                <p class="w-50">Perception</p>
                <p class="w-50">Proficient</p>
            </div>
            <div class="d-flex text-center justify-content-between p-2 w-100">
                <p class="w-50">Performance</p>
                <p class="w-50">Proficient</p>
            </div>
            <div class="d-flex text-center justify-content-between p-2 w-100">
                <p class="w-50">Persuasion</p>
                <p class="w-50">Proficient</p>
            </div>
            <div class="d-flex text-center justify-content-between p-2 w-100">
                <p class="w-50">Religion</p>
                <p class="w-50">Proficient</p>
            </div>
            <div class="d-flex text-center justify-content-between p-2 w-100">
                <p class="w-50">Sleight of Hand</p>
                <p class="w-50">Proficient</p>
            </div>
            <div class="d-flex text-center justify-content-between p-2 w-100">
                <p class="w-50">Stealth</p>
                <p class="w-50">Proficient</p>
            </div>
            <div class="d-flex text-center justify-content-between p-2 w-100">
                <p class="w-50">Survival</p>
                <p class="w-50">Proficient</p>
            </div>

        </div>
        <div class="bg-secondary text-light w-100 text-center">
            <h3>Equipment</h3>
        </div>
        <div id="equipment-section-div" class="d-flex flex-column flex-md-row col-12 text-center justify-content-center align-items-center">
            <div id="weapons-div" class="d-flex flex-column w-50 p-2 align-items-center justify-content-center">
                <h4 class="w-100 bg-primary text-white">Weapons</h4>
                <div class="d-flex">
                    <p class="mr-4">Weapon</p>
                    <p>D6 + 2</p>
                </div>
            </div>
            <div id="weapons-div" class="d-flex flex-column w-50 p-2 align-items-center justify-content-center">
                <h4 class="w-100 bg-primary text-white">Armor</h4>
                <div class="d-flex">
                    <p class="mr-4">Armor</p>
                    <p>AC 12</p>
                </div>
            </div>
        </div>
        <div id="money-section-div" class="bg-secondary text-light col-12 d-flex flex-column justify-content-center align-items-center">
            <h3>Money</h3>
            <div class="d-flex w-100">
                <h4 class="mx-2 w-50 text-center">Platinum: 0</h4>
                <h4 class="mx-2 w-50 text-center">Gold: 0</h4>
            </div>
            <div class="d-flex w-100">
                <h4 class="mx-2 w-50 text-center">Silver: 0</h4>
                <h4 class="mx-2 w-50 text-center">Copper: 0</h4>
            </div>

        </div>
        
    </main>
    


<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>
</html>
    `
}

module.exports = {
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
};