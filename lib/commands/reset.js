const jsonfile = require('jsonfile');
const file = './lib/db.json';

module.exports = async function reset() {
    try {
        let json = await jsonfile.readFile(file);
        Object.keys(json).forEach(th => {
            json[th] = [];
        })

        return jsonfile.writeFile(file, json)
            .then(res => {
                return "Le fichier a été réinitialisé";
            })
            .catch(error => {
                throw error;
            })
    } catch (e) {
        return e;
    }
}
