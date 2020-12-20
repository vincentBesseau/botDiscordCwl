module.exports = async function help() {
    return ` Voici comment utiliser le bot pour la gestion des ligues :
        \`\`\`Inscrire des joueurs :
        '-> !cwl add Username TownHall (Comment)
        Il n'est pas obligatoire de mettre un commentaire
        Exemples : 
        !cwl add Anakin TH11
        !cwl add Luke TH12 je suis sur une autre planète\r\n
        
        Desinscrire un joueur :
        '-> !cwl del Username (TownHall)
        Il n'est pas obligatoire de mettre un town hall
        Exemples : 
        !cwl del Anakin
        !cwl del Luke TH12\r\n
        
        Modifier le commentaire d'un participant :
        '-> !cwl edit Username Comment (TownHall)
        Il n'est pas obligatoire de mettre un town hall
        Exemples : 
        !cwl edit Anakin je suis ton père
        !cwl edit Luke Noooooon TH12\r\n
        
        Afficher les participants :
        '-> !cwl print\r\n
        
        Affiche l'aide
        '-> !cwl help\r\n\`\`\`
    `;
}
