import { readFileSync } from "fs";

const input = readFileSync(__dirname + "/rucksack.txt", "utf8").split("\n");

const divideIntoGroups = (n: number, rucksacks: string[]) => {
    let result: string[][] = [];

    for (let i = 0; i < rucksacks.length; i += n) {
        result.push(rucksacks.slice(i, i + n));
    }

    return result;
};

const groupedData = divideIntoGroups(3, input);

const compareTwoStrings = (firstStr: string, secondStr: string) => {
    let cleanedUpMatches: string[] = [];
    const matches: string[] = [];

    [...firstStr].forEach((firstStrChar) => {
        if (secondStr.includes(firstStrChar)) {
            matches.push(firstStrChar);
        }
    });

    cleanedUpMatches.push(...new Set(matches));
    return cleanedUpMatches.join("");
};

const multipleStrComparison = (data: string[][]) => {
    const matches: string[] = [];

    for (let i = 0; i < data.length; i++) {
        const [firstStr, secondStr, thirdStr] = data[i];

        const result = compareTwoStrings(
            compareTwoStrings(firstStr, secondStr),
            thirdStr
        );

        matches.push(result);
    }

    return matches;
};

const calculateSumOfPriorities = (cleanedUpArr: string[]) => {
    let count = 0;

    cleanedUpArr.forEach((char) => {
        if (char === char.toLowerCase()) count += parseInt(char, 36) - 9;
        if (char === char.toUpperCase()) count += parseInt(char, 36) + 17;
    });

    return count;
};

const count = calculateSumOfPriorities(multipleStrComparison(groupedData));
console.log({ count });
