exports.success = (message, data) => {
    return {message, data}
}


exports.getUniqueId = (users) => {
    //On commence par transformer le tableau des poke en un tableau d'identifiant des poke contenu dans la const ids, 
    //grace à la methode map (foncitonne comme une boucle for mais en retournant un novueau tableau)
    const usersIds = users.map(pokemon => pokemon.id)
    //On calcule l'identifiant le plus grand parmis les id de poke existant, grace a la methode native js reduce() qui permet de comparer les elements 2 a 2 dans un tableau
    const maxId = pokemonsIds.reduce((a,b) => Math.max(a, b))
    const uniqueId = maxId + 1

    return uniqueId 
}