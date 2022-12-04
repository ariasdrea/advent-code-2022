import { readFileSync } from "fs";
const input = readFileSync(__dirname + "/assignments.txt", "utf8")
    .split("\n")
    .map((val: string) => val.split(","));

type RangeAssignments = [number[], number[]][];

const getRange = (size: number, startAt: number = 0): number[] =>
    [...Array(size).keys()].map((i) => i + startAt);

const cleanUpDataAndAddRanges = (input: string[][]) => {
    const data: RangeAssignments = input.map((val) => {
        const [firstAssignments, secondAssignments] = val;

        const pairOne = firstAssignments.split("-").map((str) => Number(str));
        const pairTwo = secondAssignments.split("-").map((str) => Number(str));

        const pairOneRanges = getRange(pairOne[1] - pairOne[0] + 1, pairOne[0]);
        const pairTwoRanges = getRange(pairTwo[1] - pairTwo[0] + 1, pairTwo[0]);

        return [pairOneRanges, pairTwoRanges];
    });

    return data;
};

const findOverlap = (data: RangeAssignments) => {
    let count = 0;
    data.forEach((assignments: [number[], number[]]) => {
        const [firstAssignments, secondAssignments] = assignments;

        if (
            firstAssignments.every((elem) =>
                secondAssignments.includes(elem)
            ) ||
            secondAssignments.every((elem) => firstAssignments.includes(elem))
        ) {
            count++;
        }
    });
    return count;
};

const overlapCount = findOverlap(cleanUpDataAndAddRanges(input));

console.log({ overlapCount });
