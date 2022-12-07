import { readFileSync } from "fs";
const input: string = readFileSync(__dirname + "/characters.txt", "utf8");

const findMarkerPos = (input: string, uniqueNum: number) => {
    for (let i = 0; i < input.length; i++) {
        const unit: string = input.slice(i - uniqueNum, i);
        const strIsUnique: boolean = new Set(unit).size == unit.length;
        if (i > uniqueNum - 1 && strIsUnique) return i;
    }
};

const markerPos = findMarkerPos(input, 14);
console.log({ markerPos });
