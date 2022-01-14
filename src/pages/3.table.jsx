import React from "react";
import PremierLeague from "../components/tables/1.premier_league";
import Championship from "../components/tables/2.championship";
import LeagueOne from "../components/tables/3.league_one";
import LeagueTwo from "../components/tables/4.league_two";

const Table = () => {
  return (
    <div className="table_page">
      {" "}
      <main>
        <section>
          <h2>Tables</h2>
          <div className="football_table_container">
            <PremierLeague />
            <Championship />
            <LeagueOne />
            <LeagueTwo />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Table;
