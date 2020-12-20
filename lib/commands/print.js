const jsonfile = require('jsonfile');
const file = './lib/db.json';
const EOF = '\n';

module.exports = async function print() {
    try {
        let json = await jsonfile.readFile(file);
        let text = `Bonjour, voici la liste des Membres d'A.T.M inscrits pour la CWL à venir!${EOF}>>> __!CWL Members!__ ${EOF}`;
        Object.keys(json).forEach(th => {
            text += `**Liste des ${th.toUpperCase()}** : ${EOF}`;
            let usernumber = 0;
            Object.keys(json[th]).forEach(user => {
                usernumber++;
                let comment = json[th][user].commentaire === "" ? "" : `(${json[th][user].commentaire})`;
                text += `${usernumber} - ${json[th][user].username} ${comment} ${EOF}`;
            })
            if(usernumber === 0) text += `Aucun ${th.toUpperCase()} inscrit ${EOF}`;
        })
        return text;
    } catch (e) {
        throw e;
    }
}
