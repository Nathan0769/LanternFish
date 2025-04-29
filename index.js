import { readFileSync } from "fs";

const test = readFileSync("test.txt", "utf8");
const final = readFileSync("final.txt", "utf8");

const day = 80;

const newDay = (fish) => {
  const staticLength = fish.length;
  for (let i = 0; i < staticLength; i++) {
    if (fish[i] === 0) {
      fish[i] = 6;
      fish.push(8);
    } else {
      fish[i]--;
    }
  }
};

const part1 = (data) => {
  let result = data.split(",").map(Number);
  console.log(`Initial state: ${result}`);

  for (let i = 1; i <= day; i++) {
    newDay(result);

    //console.log(`After  ${i} day : ${result}`);
  }

  return `Il y a : ${result.length} lanterfish`;
};
console.log(part1(final));

console.log({ test, final });
