const jsonfile = require('jsonfile');
const file = './lib/db.json';

module.exports = async function add(username, townHallLevel, comment) {

    if (typeof username == 'undefined') {
        throw "L'utilisateur n'est pas définie";
    }
    if (typeof townHallLevel == 'undefined') {
        throw "Le Town Hall n'est pas définie";
    }

    let thLowerCase = townHallLevel.toLowerCase();
    let json = await jsonfile.readFile(file);

    if((thLowerCase in json)) {
        if(!(json[thLowerCase].includes(username))) {
            json[thLowerCase].push({"username": username, "commentaire": comment});
            return jsonfile.writeFile(file, json)
                .then(res => {
                    return `l'utilisateur ${username} à été ajouté au Town Hall suivant : ${townHallLevel}`;
                })
                .catch(error => {
                    throw error;
                })
        } else {
            throw `L'utilisateur ${username} est déjà dans ce Town Hall ${townHallLevel}`;
        }
    } else {
        throw `Le Town Hall ${townHallLevel} n'est pas valide`;
    }
}
