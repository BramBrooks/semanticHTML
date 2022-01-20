import React from "react";

const PremierLeague = () => {
  return (
    <div className="football_flex_item">
      <table className="pl_formatting">
        <caption>Premier League</caption>

        <thead>
          <tr>
            <th></th>
            <th>Team</th>
            <th>P</th>
            <th>GD</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Chelsea</td>
            <td>11</td>
            <td>23</td>
            <td>26</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Manchester City</td>
            <td>11</td>
            <td>16</td>
            <td>23</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Liverpool</td>
            <td>10</td>
            <td>21</td>
            <td>22</td>
          </tr>
          <tr>
            <td>4</td>
            <td>West Ham United</td>
            <td>10</td>
            <td>9</td>
            <td>20</td>
          </tr>
          <tr className="my_teams">
            <td>5</td>
            <td>Manchester United</td>
            <td>11</td>
            <td>2</td>
            <td>17</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Brighton</td>
            <td>11</td>
            <td>0</td>
            <td>17</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Arsenal</td>
            <td>10</td>
            <td>-1</td>
            <td>17</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Wolves</td>
            <td>11</td>
            <td>-1</td>
            <td>16</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Crystal Palace</td>
            <td>11</td>
            <td>1</td>
            <td>15</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Tottenham Hotspur</td>
            <td>10</td>
            <td>-7</td>
            <td>15</td>
          </tr>
          <tr>
            <td>11</td>
            <td>Everton</td>
            <td>10</td>
            <td>0</td>
            <td>14</td>
          </tr>
          <tr>
            <td>12</td>
            <td>Leicester</td>
            <td>10</td>
            <td>-2</td>
            <td>14</td>
          </tr>
          <tr>
            <td>13</td>
            <td>Southampton</td>
            <td>11</td>
            <td>-2</td>
            <td>14</td>
          </tr>
          <tr>
            <td>14</td>
            <td>Brentford</td>
            <td>11</td>
            <td>-1</td>
            <td>12</td>
          </tr>
          <tr>
            <td>15</td>
            <td>Aston Villa</td>
            <td>11</td>
            <td>-6</td>
            <td>10</td>
          </tr>
          <tr>
            <td>16</td>
            <td>Watford</td>
            <td>10</td>
            <td>-6</td>
            <td>10</td>
          </tr>
          <tr>
            <td>17</td>
            <td>Leeds</td>
            <td>10</td>
            <td>-7</td>
            <td>10</td>
          </tr>
          <tr>
            <td>18</td>
            <td>Burnley</td>
            <td>11</td>
            <td>-6</td>
            <td>8</td>
          </tr>
          <tr>
            <td>19</td>
            <td>Newcastle</td>
            <td>11</td>
            <td>-12</td>
            <td>5</td>
          </tr>
          <tr>
            <td>20</td>
            <td>Norwich</td>
            <td>10</td>
            <td>23</td>
            <td>25</td>
          </tr>
        </tbody>
      </table>
      <div className="football_tables_info">
        <p>Data accurate as at 28/11/2021.</p>
        <p>Hard coded for demonstration purposes.</p>
        <p>Next step: pull in live Football API data.</p>
      </div>
    </div>
  );
};
export default PremierLeague;
