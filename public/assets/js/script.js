
//Document selectors
const editingDiv = document.querySelector("#editing-div");
const doneButton = document.querySelector("#doneButton");
const charName = document.querySelector("#characterName");
const charLevel = document.querySelector("#characterLevel");
const charRace = document.querySelector("#characterRace");
const charClass = document.querySelector("#characterClass");
const charXP = document.querySelector("#characterXP");
const charImage = document.querySelector("#characterImage");
const charAttributes = document.getElementsByClassName("characterAttribute");
const charAttributeBonuses = document.getElementsByClassName("characterAttributeBonus");
const charHPCurrent = document.querySelector("#characterHPCurrent");
const charHPMax = document.querySelector("#characterHPMax");
const charAC = document.querySelector("#characterAC");
const charSkills = document.getElementsByClassName("characterSkill");
const charSkillProficiency = document.getElementsByClassName("characterSkillProficiency");

//Document parent div selectors
const nameDiv = document.querySelector("#characterNameDiv");
const levelDiv = document.querySelector("#characterLevelDiv");
const raceDiv = document.querySelector("#characterRaceDiv");
const classDiv = document.querySelector("#characterClassDiv");
const xpDiv = document.querySelector("#xp-section-div");
const imgDiv = document.querySelector("#characterNameDiv");
const hpDiv = document.querySelector("#hpDiv");
const acDiv = document.querySelector("#acDiv");

//Below is a repeat of the content in Character.js but I can't import it.  Would love to modularize once
//I figure out how.
class Character {
    constructor() {
        this.name = "Default";
        this.level = 1;
        this.race = "Human";
        this.characterClass = "Fighter";
        this.attributes = [
            {
                name: "Strength",
                score: 10
            },
            {
                name: "Intelligence",
                score: 10
            },
            {
                name: "Wisdom",
                score: 10
            },
            {
                name: "Dexterity",
                score: 10
            },
            {
                name: "Constitution",
                score: 10
            },
            {
                name: "Charisma",
                score: 10
            }
        ];
        this.bonuses = [0, 0, 0, 0, 0, 0];
        this.move = 30;
        this.hitDice = 8;
        this.maxHP = 28;
        this.currentHP = this.maxHP;
        this.ac = 10;
        this.xp = 0;
        this.nextLevelXP = 400;
        this.skills = [
            {
                name: "Acrobatics",
                Proficient: "No"
            },
            {
                name: "Animal Handling",
                Proficient: "No"
            },
            {
                name: "Arcana",
                Proficient: "No"
            },
            {
                name: "Athletics",
                Proficient: "No"
            },
            {
                name: "Deception",
                Proficient: "No"
            },
            {
                name: "History",
                Proficient: "No"
            },
            {
                name: "Insight",
                Proficient: "No"
            },
            {
                name: "Intimidation",
                Proficient: "No"
            },
            {
                name: "Investigation",
                Proficient: "No"
            },
            {
                name: "Medicine",
                Proficient: "No"
            },
            {
                name: "Nature",
                Proficient: "No"
            },
            {
                name: "Perception",
                Proficient: "No"
            },
            {
                name: "Performance",
                Proficient: "No"
            },
            {
                name: "Persuasion",
                Proficient: "No"
            },
            {
                name: "Religion",
                Proficient: "No"
            },
            {
                name: "Sleight of Hand",
                Proficient: "No"
            },
            {
                name: "Stealth",
                Proficient: "No"
            },
            {
                name: "Survival",
                Proficient: "No"
            }
        ]
        this.equipment = [
            {
                weapons: 
                {
                    name: "fists",
                    damage: 2
                },
                armor: 
                {
                    name: "clothing",
                    ac: 0
                },
                potions:
                {

                },
                other:
                {

                }
            }
        ];
        this.money = {
            platinum: 0,
            gold: 0,
            silver: 0,
            copper: 0
        }
    }

    //Methods
    getBonus(score) {
        if (score === 1) {
            return -5;
        }
        else if (score < 4) {
            return -4;
        }
        else if (score < 6) {
            return -3;
        }
        else if (score < 8) {
            return -2;
        }
        else if (score < 10) {
            return -1;
        }
        else if (score < 12) {
            return 0;
        }
        else if (score < 14) {
            return 1;
        }
        else if (score < 16) {
            return 2;
        }
        else if (score < 18) {
            return 3;
        }
        else if (score < 20) {
            return 4;
        }
        else {
            return 5;
        }
    }
}

//Function that rolls dice
rollDice = (number, type, bonus=0) => {
    let results = [];
    for (let i = 0; i < number; i++) {
        let roll = Math.floor(Math.random() * type) + 1 + bonus;
        console.log("Rolled a "+roll);
        results.push(roll);
    }
    console.log(results);
    return results;
};

//Array of possible choices for selections such as race and class
const races = [
    {
        name: "Dwarf",
        move: 25,
        darkvision: 60
    },
    {
        name: "Dragonborn",
        move: 30,
        darkvision: 0
    },
    {
        name: "Elf",
        move: 30,
        darkvision: 60
    },
    {
        name: "Gnome",
        move: 25,
        darkvision: 60
    },
    {
        name: "Half-Elf",
        move: 30,
        darkvision: 30
    },
    {
        name: "Half-Orc",
        move: 30,
        darkvision: 30
    },
    {
        name: "Halfling",
        move: 25,
        darkvision: 0
    },
    {
        name: "Human",
        move: 30,
        darkvision: 0
    },
    {
        name: "Tiefling",
        move: 30,
        darkvision: 60
    }
];

const classes = [
    {
        name: "Fighter",
        hitDice: 10,
        spells: false
    },
    {
        name: "Ranger",
        hitDice: 8,
        spells: false
    },
    {
        name: "Barbarian",
        hitDice: 12,
        spells: false
    },
    {
        name: "Paladin",
        hitDice: 8,
        spells: true
    },
    {
        name: "Cleric",
        hitDice: 8,
        spells: true
    },
    {
        name: "Rogue",
        hitDice: 6,
        spells: false
    },
    {
        name: "Druid",
        hitDice: 12,
        spells: true
    },
    {
        name: "Monk",
        hitDice: 8,
        spells: false
    },
    {
        name: "Wizard",
        hitDice: 6,
        spells: true
    },
    {
        name: "Bard",
        hitDice: 8,
        spells: true
    }
];

//Functions to handle each of the clickable fields in the character creation
//Edit name
editName = () => {
    console.log("Editing name...");
    charName.remove();
    let nameTextField = document.createElement("input");
    nameTextField.setAttribute("id", "nameText");
    nameTextField.setAttribute("placeholder", "Enter Name Here");
    nameTextField.classList.add("form-control", "col-8", "p-2", "m-2", "text-center");
    nameDiv.appendChild(nameTextField);

    //Add the listener for a blur event or submit event to:
    //1. change the character's name to nameTextField.value
    //2. remove nameTextField and replace with a new charName

}

//Edit race
editRace = () => {
    console.log("Editing race...");
    charRace.remove();
    let raceSelect = document.createElement("select");

    //Loop through the list of races and populate the options
    for (let i = 0; i < races.length; i++) {
        let option = document.createElement("option");
        option.innerText = races[i].name;
        raceSelect.appendChild(option);
    };

    //Format and append raceSelect
    raceSelect.classList.add("form-control");
    raceDiv.appendChild(raceSelect);

    //Add the listener for a blur event or submit event to:
    //1. change the character's race to raceSelect.value
    //2. remove raceSelect and replace with a new, formatted charRace
}

//Edit class
editClass = () => {
    console.log("Editing class...");
    charClass.remove();
    let classSelect = document.createElement("select");

    //Loop through the list of races and populate the options
    for (let i = 0; i < classes.length; i++) {
        let option = document.createElement("option");
        option.innerText = classes[i].name;
        classSelect.appendChild(option);
    };

    //Format and append raceSelect
    classSelect.classList.add("p-1", "form-control");
    classDiv.appendChild(classSelect);

    //Add the listener for a blur event or submit event to:
    //1. change the character's class to classSelect.value
    //2. remove classSelect and replace with a new, formatted charClass
}

//Edit attribute
editAttribute = (attribute) => {
    console.log("Editing attribute "+attribute.innerText);
}

//Edit HP
editHP = () => {
    console.log("Editing HP...");
}

//Edit proficiency
editProficiency = (attribute) => {
    console.log("Editing proficiency for "+attribute);
}

//Finish editing
finishEdits = () => {
    console.log("Finished editing");

    let character = new Character();

    //Assign the attributes to the elements of the page
    character.name = charName.innerText;
    character.level = 12;
    character.race = charRace.innerText;
    character.characterClass = charClass.innerText;

    //Post to the database with a fetch request
    fetch("/api/characters", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(character),
      })
      .then(response => {
            if (response.ok) {
                return response.json();
            }
            alert("Error "+response.statusText);

        })
        .then(
            finalizeCharacter()
        );
};

//Function that finalizes the character sheet with a fetch GET request from characters.json
//And removes edit div/editable HTML elements, replacing them with static ones
finalizeCharacter = () => {
    console.log("Finalizing character sheet...");

    fetch("/api/characters").then((response) => {
        response.json().then(array => {
            let selected = array[0].length - 1;
            console.log(array[0][selected]);
        });
    })
}


//Test the functionality of each of the selectors
document.addEventListener("click", (event)=> {
    let target = event.target;

    if (target.getAttribute("id") === "characterName") {
        editName();
    }
    else if (target.getAttribute("id") === "characterRace") {
        editRace();
    }
    else if (target.getAttribute("id") === "characterClass") {
        editClass();
    }
    else if (target.getAttribute("id") === "doneButton") {
        finishEdits();
    }
});



//Function to call the entire character object from the database
