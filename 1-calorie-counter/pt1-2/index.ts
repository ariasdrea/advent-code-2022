// Part 1 - Each section of numbers represents a single elf and the sum of those numbers is the number of calories. Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?

const fs = require("fs");

const data = fs
    .readFileSync(__dirname + "/calories.txt", "utf8")
    .split("\n")
    .map((val: string) => parseInt(val));

const countCalories = (calories: number[]): [number, number[]] => {
    let arrOfTotalCals: number[] = [];
    let runningSum: number = 0;

    calories.map((num) => {
        if (!isNaN(num)) {
            runningSum += num;
        } else {
            arrOfTotalCals.push(runningSum);
            runningSum = 0;
        }
    });

    return [Math.max(...arrOfTotalCals), arrOfTotalCals];
};

const [maxCount, arrOfTotalCals] = countCalories(data);

// Part 2 - Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total?

const countTopThree = (data: number[]) => {
    const [first, second, third] = data.sort((a, b) => b - a);
    return first + second + third;
};

const result = countTopThree(arrOfTotalCals);

console.log({ maxCount, arrOfTotalCals, result });
