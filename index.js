import { readFileSync } from "fs";

const test = readFileSync("test.txt", "utf8");
const final = readFileSync("final.txt", "utf8");

const day = 256;

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

  for (let i = 1; i <= day; i++) {
    newDay(result);
  }

  return `Il y a : ${result.length} lanterfish`;
};

//console.log(part1(final));

const part2 = (data) => {
  const ages = data
    .split(",")
    .map(Number)
    .reduce((acc, curr) => {
      acc[curr] += 1;
      return acc;
    }, Array.from({ length: 9 }).fill(0));

  for (let i = 0; i < day; i++) {
    const day0 = ages.shift();

    ages.push(day0);
    ages[6] += day0;
  }

  return `Il y a : ${ages.reduce((acc, num) => acc + num, 0)} lanterfish`;
};

console.log(part2(final));

//console.log({ test, final });
