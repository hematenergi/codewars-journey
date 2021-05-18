//8 kyu Multiplication table for numbe
function multiTableArray(number) {
  let data = [];
  for (let i = 1; i <= 10; i++) {
    const res = i * number;
    data.push(`${i} * ${number} = ${i * number}`);
  }
  return String(data.join("\n"));
}

console.log(multiTableArray(5));

const multiTable = (number) => {
  let table = "";

  for (let i = 1; i <= 10; i++) {
    table += `${i} * ${number} = ${i * number}${i < 10 ? "\n" : ""}`;
  }

  return table;
};
console.log(multiTable(5));
