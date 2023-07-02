function caesarCipher(str, shift) {
    if (typeof str !== 'string') {
        return "not a string"
    }

    return str.replace(/[a-zA-Z]/g, (symbol) => {
        const code = symbol.charCodeAt(0);
        const base = code >= 65 && code <= 90 ? 65 : 97;
        const newCode = ((code - base + shift) % 26) + base;
        return String.fromCharCode(newCode);
    });
  }

export default caesarCipher;