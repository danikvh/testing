function capitalize(str) {
    str = str.split(""); //Convierte el string en un array
    let change = false
    //Busca una letra para hacerla mayúscula
    for (let i = 0; i < str.length; i++) {
        if (isNaN(str[i])) {
            str[i] = str[i].toUpperCase()
            change = true
            break
        }
    }
    //Si no hay letras
    if (!change) return "no valid characters"
    //Devolvemos el string
    str = str.join("")
    return str
}

export default capitalize;