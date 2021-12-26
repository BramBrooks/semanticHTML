import htmlTagData from "../data/htmltags";

const tagNumber = htmlTagData.length;
const data = htmlTagData;

exports.percentageCalculator = (data) => {
  const counter = {};
  for (let i = 0; i < data.length; i++) {
    let key = data[i].used;

    if (!counter[key]) {
      counter[key] = 1;
    } else {
      counter[key] += 1;
    }
  }

  // return percentageCompleted;
  console.log(counter, "counter");
  return counter;
};
