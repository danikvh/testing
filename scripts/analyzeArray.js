function analyzeArray(arr) {
    if (!Array.isArray(arr)) {
        return 'not an array';
    }

    if (arr.length === 0) {
        return 'Error: Array is empty.';
    }

    if (!arr.every((value) => typeof value === 'number' && !isNaN(value))) {
        return 'Error: Array should contain only numbers.';
    }

    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const sum = arr.reduce((acc, num) => acc + num, 0);
    const average = sum / arr.length;

    return {
        min,
        max,
        average,
        length: arr.length
    }
}

export default analyzeArray