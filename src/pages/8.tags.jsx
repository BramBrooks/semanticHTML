import React from "react";
import TagTable from "../components/tagtable";
import TagPercentage from "../components/tag_percentage";

const Tag = () => {
  return (
    <main>
      <section>
        <h2>Tags.</h2>
        <div className="tag_table_container">
          <TagTable />
          {/* <TagPercentage /> */}
        </div>
      </section>
    </main>
  );
};

export default Tag;
