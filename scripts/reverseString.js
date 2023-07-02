function reverseString(str) {
    str = str.split("")
    let res = []
    
    str.forEach((symbol, index) => {
        res[str.length - 1 - index] = symbol
    }) 
    
    return res.join("")
}

export default reverseString;