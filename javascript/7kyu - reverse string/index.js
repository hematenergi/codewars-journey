const data = "The quick brown fox jumps over the lazy dog.";

const kebalik = (str) => {
  return str
    .split(" ")
    .map((e) => {
      return e.split("").reverse().join("");
    })
    .join(" ");
};

console.log(kebalik(data));
