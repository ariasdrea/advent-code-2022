import { readFileSync } from "fs";

const input: string[] = readFileSync(__dirname + "/strategy.txt", "utf8").split(
    "\n"
);

type Opponent = "A" | "B" | "C";
type Outcome = "X" | "Y" | "Z";

interface ShapePoints {
    Rock: number;
    Paper: number;
    Scissors: number;
}

let count = 0;

const calculateScore = (opp: Opponent, selection: Outcome) => {
    const oppCol = {
        A: "Rock",
        B: "Paper",
        C: "Scissors"
    };

    const outcomeCol = {
        X: "Lose",
        Y: "Draw",
        Z: "Win"
    };

    const shapePoints: ShapePoints = {
        Rock: 1,
        Paper: 2,
        Scissors: 3
    };

    const oppChoice = oppCol[opp];
    const outcome = outcomeCol[selection];

    if (outcome === "Draw") {
        count += 3 + shapePoints[oppChoice as keyof ShapePoints];
    }

    if (outcome === "Lose") {
        if (oppChoice === "Rock") count += shapePoints["Scissors"];
        if (oppChoice === "Paper") count += shapePoints["Rock"];
        if (oppChoice === "Scissors") count += shapePoints["Paper"];
    }

    if (outcome === "Win") {
        if (oppChoice === "Rock") count += 6 + shapePoints["Paper"];
        if (oppChoice === "Paper") count += 6 + shapePoints["Scissors"];
        if (oppChoice === "Scissors") count += 6 + shapePoints["Rock"];
    }
};

input.forEach((each) => calculateScore(each.charAt(0), each.charAt(2)));

console.log({ count });
