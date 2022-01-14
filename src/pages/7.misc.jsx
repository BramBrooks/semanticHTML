import React from "react";
import figure_image from "../media/images/venn_diagram.jpg";

const Misc = () => {
  return (
    <div className="misc_page_container">
      <main className="output">
        <h2>Misc</h2>

        {/* <h2>This is a menu</h2>
        <menu type="popup">
          <li>
            <button onclick="copy()">Copy</button>
          </li>
          <li>
            <button onclick="cut()">Cut</button>
          </li>
          <li>
            <button onclick="paste()">Paste</button>
          </li>
        </menu> */}
        {/* <h2>
          This List Contains the Data element for each list item, using the
          value attribute
        </h2>
        <p>New Products:</p>
        <ul>
          <li>
            <data value="398">Mini Ketchup</data>
          </li>
          <li>
            <data value="399">Jumbo Ketchup</data>
          </li>
          <li>
            <data value="400">Mega Jumbo Ketchup</data>
          </li>
        </ul> */}

        {/* <h2>Figure and Figure Caption</h2>
        <figure>
          <figcaption>Old Macdonald Venn Diagram</figcaption>
          <img src={figure_image} alt="old MacDonald Venn diagram" />
        </figure> */}
        {/* <h2>iframe</h2>
        <iframe src="" frameborder="0"></iframe>
        <iframe
          id="inlineFrameExample"
          title="Inline Frame Example"
          width="300"
          height="200"
          // src="https://www.openstreetmap.org/search?query=Old%20Trafford#map=17/53.46313/-2.29139"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"
        ></iframe> */}
      </main>
    </div>
  );
};

export default Misc;

// dl -> description list
// dt -> description term (description name)
// dd -> description definition
// dfn -> indicates the defining instance of an enclosed term.
