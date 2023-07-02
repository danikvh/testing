const calculator = {
    add: function(a, b) {
        return this.isANumber(a, b) ? a + b : "Introduce numeros";
    },
    subtract: function(a, b) {
        return this.isANumber(a, b) ? a - b : "Introduce numeros";
    },
    divide: function(a, b) {
        return this.isANumber(a, b) ? a / b : "Introduce numeros";
    },
    multiply: function(a, b) {
        return this.isANumber(a, b) ? a * b : "Introduce numeros";
    },
    isANumber: function(a, b) {
        return typeof a === "number" && typeof b === "number";
    }
}

export default calculator