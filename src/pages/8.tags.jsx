import React from "react";
import TagTable from "../components/tagtable";

function Tag(props) {
  const result = props.result;

  return (
    <div className={result ? "tag_page_hidden" : "tag_page_container"}>
      {" "}
      <main>
        <section>
          <h2>
            Tags&nbsp;<span>included</span>&nbsp;in this project: &nbsp;
            <span>81%</span>&nbsp;
          </h2>
          {/* <p className="p">
          Below is a list of currently HTML elements (aside from those which are
          now defunct).
          <br />
          <br />
          Tags marked in <mark>red</mark> indicate tag has been included in this
          project so far...
        </p> */}
          <div className="tag_table_container">
            <TagTable />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Tag;
