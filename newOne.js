const test = [
  {
    name: "Garrett",
    age: "shit",
  },
  {
    name: "Phil Hawke tua",
    age: "shit",
  },
  {
    name: "Mike Jones",
    age: "shit",
  },
];

const getNames = function (args) {
  const names = args.map((elem) => {
    return elem.name;
  });
  return names;
};

const names = getNames(test);
console.log(names);
console.log("test main");
