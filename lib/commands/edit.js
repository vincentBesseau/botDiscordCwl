const jsonfile = require('jsonfile');
const file = './lib/db.json';

module.exports = async function edit(username, comment, townHallSelected) {

    if (typeof username == 'undefined') {
        throw "L'utilisateur n'est pas définie";
    }

    let json = await jsonfile.readFile(file);

    if(typeof comment == 'undefined') {
        if(typeof townHallSelected === "undefined") {
            Object.keys(json).forEach(th => {
                json = editComment(username,json,th,null);
            })
        } else {
            let townHall = townHallSelected.toLowerCase();
            json = editComment(username,json,townHall,null);
        }
    } else {
        if(typeof townHallSelected === "undefined") {
            Object.keys(json).forEach(th => {
                json = editComment(username,json,th,comment);
            })
        } else {
            let townHall = townHallSelected.toLowerCase();
            json = editComment(username,json,townHall,comment);
        }
    }

    return jsonfile.writeFile(file, json)
        .then(res => {
            return `le commentaire ${comment} à été modifié pour l'utilisateur suivant : ${username}`;
        })
        .catch(error => {
            throw error;
        })

}

function editComment(username, json, th, comment) {
    Object.keys(json[th]).forEach(user => {
        if (json[th][user].username.toLowerCase() === username.toLowerCase()) {
            json[th][user].commentaire = comment;
        }
    })
    return json;
}
