import { readFileSync } from "fs";

const input = readFileSync(__dirname + "/rucksack.txt", "utf8").split("\n");

const cleanUpData = (rucksacks: string[]) => {
    let repeatedChars: string[][] = [];

    rucksacks.forEach((compartment) => {
        const firstHalf = compartment.slice(0, compartment.length / 2);
        const secondHalf = compartment.slice(
            compartment.length / 2,
            compartment.length
        );

        const matches: string[] = [];

        [...firstHalf].forEach((firstHalfChar) => {
            if (secondHalf.includes(firstHalfChar)) matches.push(firstHalfChar);
        });

        repeatedChars.push(matches);
    });

    const cleanedUpArr: string[] = [];
    repeatedChars.forEach((arr) => cleanedUpArr.push(...new Set(arr)));

    return cleanedUpArr;
};

const calculateSumOfPriorities = (cleanedUpArr: string[]) => {
    let count = 0;

    cleanedUpArr.forEach((char) => {
        if (char === char.toLowerCase()) count += parseInt(char, 36) - 9;
        if (char === char.toUpperCase()) count += parseInt(char, 36) + 17;
    });
    return count;
};

const count = calculateSumOfPriorities(cleanUpData(input));
console.log({ count });
