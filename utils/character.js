
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

module.exports = Character;