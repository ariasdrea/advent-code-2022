"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const input = (0, fs_1.readFileSync)(__dirname + "/rucksack.txt", "utf8").split("\n");
const divideIntoGroups = (n, rucksacks) => {
    let result = [];
    for (let i = 0; i < rucksacks.length; i += n) {
        result.push(rucksacks.slice(i, i + n));
    }
    return result;
};
const groupedData = divideIntoGroups(3, input);
const compareTwoStrings = (firstStr, secondStr) => {
    let cleanedUpMatches = [];
    const matches = [];
    [...firstStr].forEach((firstStrChar) => {
        if (secondStr.includes(firstStrChar)) {
            matches.push(firstStrChar);
        }
    });
    cleanedUpMatches.push(...new Set(matches));
    return cleanedUpMatches.join("");
};
const multipleStrComparison = (data) => {
    const matches = [];
    for (let i = 0; i < data.length; i++) {
        const [firstStr, secondStr, thirdStr] = data[i];
        const result = compareTwoStrings(compareTwoStrings(firstStr, secondStr), thirdStr);
        matches.push(result);
    }
    return matches;
};
const calculateSumOfPriorities = (cleanedUpArr) => {
    let count = 0;
    cleanedUpArr.forEach((char) => {
        if (char === char.toLowerCase())
            count += parseInt(char, 36) - 9;
        if (char === char.toUpperCase())
            count += parseInt(char, 36) + 17;
    });
    return count;
};
const count = calculateSumOfPriorities(multipleStrComparison(groupedData));
console.log({ count });
