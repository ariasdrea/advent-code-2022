import { readFileSync } from "fs";

const input: string[] = readFileSync(__dirname + "/strategy.txt", "utf8").split(
    "\n"
);

type Opponent = "A" | "B" | "C";
type Me = "X" | "Y" | "Z";

let count = 0;

const calculateScore = (opp: Opponent, me: Me) => {
    const firstCol = {
        A: "Rock",
        B: "Paper",
        C: "Scissors"
    };

    const secondCol = {
        X: {
            name: "Rock",
            score: 1
        },
        Y: {
            name: "Paper",
            score: 2
        },
        Z: {
            name: "Scissors",
            score: 3
        }
    };

    const oppChoice = firstCol[opp];
    const { name: myChoice } = secondCol[me];
    const { score } = secondCol[me];

    if (oppChoice === myChoice) {
        console.log("it's a draw 😐");
        count += 3 + score;
    }

    if (
        (oppChoice === "Rock" && myChoice === "Scissors") ||
        (oppChoice === "Paper" && myChoice === "Rock") ||
        (oppChoice === "Scissors" && myChoice === "Paper")
    ) {
        console.log("i lost 🥲");
        count += 0 + score;
    }

    if (
        (oppChoice === "Rock" && myChoice === "Paper") ||
        (oppChoice === "Paper" && myChoice === "Scissors") ||
        (oppChoice === "Scissors" && myChoice === "Rock")
    ) {
        console.log("i won 🎉");
        count += 6 + score;
    }
};

input.forEach((each) => calculateScore(each.charAt(0), each.charAt(2)));

console.log({ count });
