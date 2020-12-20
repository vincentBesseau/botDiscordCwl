const add = require('../commands/add');
const edit = require('../commands/edit');
const del = require('../commands/delete');
const print = require('../commands/print');
const reset = require('../commands/reset');
const help = require('../commands/help');

module.exports = async function checkContent(content) {
    if(content.startsWith('!cwl')) {
        let sendTo = 1;
        try {
            let command = content.split(" ");
            let data = null;
            switch (command[1]) {
                case 'add':
                    var info = content.split(command[3]);
                    data = await add(command[2], command[3], info[1].trim());
                    break;
                case 'edit':
                    var info = content.split(command[2]);
                    data = await edit(command[2], info[1].trim());
                    break;
                case 'del':
                    data = await del(command[2], command[3]);
                    break;
                case 'print':
                    sendTo = 0;
                    data = await print();
                    break;
                case 'reset':
                    data = await reset();
                    break;
                default:
                    data = `Commande ${command[1]} n'est pas reconnue \n`;
                case 'help':
                    sendTo = 0;
                    data = await help();
                    break;
            }
            return [sendTo, data];
        } catch (e) {
            return e;
        }
    }

}
