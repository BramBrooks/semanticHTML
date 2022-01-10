import React from "react";
import TagTable from "../components/tagtable";
import TagPercentage from "../components/tag_percentage";

const Tag = () => {
  return (
    <main>
      <section>
        <h2>Tags.</h2>
        <p className="p">
          Below is a list of currently HTML elements (aside from those which are
          now defunct).
          <br />
          <br />
          Tags marked in <mark>red</mark> indicate tag has been included in this
          project so far...
        </p>
        <div className="tag_table_container">
          <TagTable />
          {/* <TagPercentage /> */}
        </div>
      </section>
    </main>
  );
};

export default Tag;
