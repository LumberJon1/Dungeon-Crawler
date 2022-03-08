rollDice = (number, type, bonus=0) => {
    let results = [];
    for (let i = 0; i < number; i++) {
        let roll = Math.floor(Math.random() * type) + 1 + bonus;
        console.log("Rolled a "+roll);
        results.push(roll);
    }
    console.log(results);
    return results;
}

module.exports = rollDice;