const jsonfile = require('jsonfile');
const file = './lib/db.json';

module.exports = async function del(username, townHallSelected) {

    if (typeof username == 'undefined') {
        throw "L'utilisateur n'est pas définie";
    }

    let userDeleted = 0;
    let json = await jsonfile.readFile(file);

    if(typeof townHallSelected === "undefined") {
        Object.keys(json).forEach(th => {
            Object.keys(json[th]).forEach((user, key) => {
                if (json[th][user].username.toLowerCase() === username.toLowerCase()) {
                    json[th].splice(key);
                    userDeleted = 1;
                }
            })
        })
    } else {
        let townHall = townHallSelected.toLowerCase();
        Object.keys(json[townHall]).forEach((user, key) => {
            if(json[townHall][user].username.toLowerCase() === username.toLowerCase()) {
                json[townHall].splice(key);
                userDeleted = 1;
            }
        })
    }


    if(userDeleted === 1) {
        return jsonfile.writeFile(file, json)
            .then(() => {
                return `L'utilisateur ${username} est supprimé`;
            })
            .catch(error => {
                throw error;
            })
    } else {
        return `L'utilisateur ${username} n'a pas été trouvé`;
    }

}
