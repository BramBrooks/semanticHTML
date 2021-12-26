import React from "react";
import htmlTagData from "../data/htmltags";

let tableRowColor;

const TagTable = () => {
  return (
    <table>
      {/* <caption>Checklist</caption> */}
      <thead>
        <tr>
          <th>Tag</th>
          <th>Meaning</th>
          <th>Used?</th>
        </tr>
      </thead>
      <tbody>
        {htmlTagData.map((tagData) => {
          {
            {
              (tagData.used === "Yes") | (tagData.used === "n/a")
                ? (tableRowColor = "red")
                : (tableRowColor = "white");
            }
          }
          return (
            <tr className={tableRowColor}>
              <td>&lt;&nbsp;{tagData.tag}&nbsp;&gt;</td>
              <td>{tagData.meaning}.</td>
              <td>{tagData.used}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default TagTable;
