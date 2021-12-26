import React from "react";
import htmlTagData from "../data/htmltags";

const tagNumber = htmlTagData.length;
const data = htmlTagData;

const counter = {};

const percentageCalculator = function () {
  for (let i = 0; i < data.length; i++) {
    let key = data[i].used;

    if (!counter[key]) {
      counter[key] = 1;
    } else {
      counter[key] += 1;
    }
  }

  return counter;
};

const tagObject = percentageCalculator();
console.log(tagObject);

const TagPercentage = () => {
  return (
    <>
      <table>
        <caption>Summary</caption>
        <thead>
          <tr>
            <th>Information</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Total HTML Tags</td>
            <td>{tagNumber}</td>
          </tr>
          <tr>
            <td>Included</td>
            <td>{tagObject.Yes}</td>
          </tr>
          <tr>
            <td>Still To Include</td>
            <td>{tagObject.No}</td>
          </tr>
          <tr>
            <td>% Completed</td>

            <td>{Math.floor((tagObject.Yes / tagNumber) * 100)}&nbsp;%</td>
          </tr>
          <tr>
            <td>% Outstanding</td>
            <td>
              {100 - Math.floor((tagObject.Yes / tagNumber) * 100)}&nbsp;%
            </td>
          </tr>
        </tbody>
      </table>

      {/* <progress max="100">this is some progress</progress> */}
    </>
  );
};

export default TagPercentage;
