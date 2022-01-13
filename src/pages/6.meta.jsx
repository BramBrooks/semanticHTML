import React from "react";
import cookie_monster from "../media/images/cookie_monster_filter.jpg";

const Meta = () => {
  return (
    <main className="meta_page">
      <div className="container_1">
        <section>
          <header>
            <h2>Meta Data Attributes.</h2>
          </header>
          <ul>
            <li>
              <dd>
                <strong>Name&nbsp;&gt;</strong>
              </dd>
              <dfn>
                This attribute is used to mention the name of the property, e.g.
                <p>
                  <code>
                    name="author"
                    <br />
                    name="description"
                    <br />
                    name="keywords"
                  </code>
                </p>
              </dfn>
            </li>
            <li>
              <dd>
                <strong>Content&nbsp;&gt;</strong>
              </dd>
              <dfn>
                Provides corresponding value to attribute named in 'name'
                attribute, for example:
                <p>
                  <code>
                    content="Bramwell Brooks"
                    <br />
                    content="Semantic HTML Demonstration"
                    <br />
                    content="HTML, web developer, website"
                  </code>
                </p>
              </dfn>
            </li>
            {/* <li>
              <dd>
                <strong>Scheme&nbsp;&gt;</strong>
              </dd>
              <dfn>
                This property declares the scheme which must be used to
                interpret the value of the property.
              </dfn>
            </li> */}
            <li>
              <dd>
                <strong>HTTP Equiv&nbsp;&gt;</strong>
              </dd>
              <dfn>
                {/* Typically used for message headers.  */}
                Commonly used for setting cookies and refreshing pages, e.g.
                <p>
                  <code>http-equiv="refresh" content="30"</code>
                </p>
              </dfn>
            </li>
            <li>
              <dd>
                <strong>Keywords&nbsp;&gt;</strong>
              </dd>
              <dfn>
                Used for setting keywords for search engine matches, e.g.
                <p>
                  <code>
                    name="keywords",
                    <br />
                    content="sample,
                    <br />
                    HTML, meta data";
                  </code>
                </p>
              </dfn>
            </li>
            <li>
              <dd>
                {" "}
                <strong>Document Description&nbsp;&gt;</strong>
              </dd>
              <dfn>
                Search engines also use this attribute to help index search
                results, e.g.
                <p>
                  {" "}
                  <code>
                    name="description", <br />
                    content="this is a demo for meta-tags";
                  </code>
                </p>
              </dfn>
            </li>
            <li>
              <dd>
                <strong>Document Revision Date&nbsp;&gt;</strong>
              </dd>
              <dfn>
                Search engines value recently revised documents, so it's
                important to set this, e.g.
                <p>
                  <code>
                    name="revised",
                    <br />
                    content="Sample, 8/11/2021".
                  </code>
                </p>
              </dfn>
            </li>
            <li>
              <dd>
                <strong>Page Redirection&nbsp;&gt;</strong>
              </dd>
              <dfn>
                You can use Meta data to redirect users to different pages e.g.
                <p>
                  <code>
                    http equiv="refresh", <br />
                    content="5", <br />
                    url=http://Google.com;{" "}
                  </code>{" "}
                </p>{" "}
              </dfn>{" "}
            </li>{" "}
            <li>
              {" "}
              <dd>
                <strong> Author&nbsp;&gt;</strong>{" "}
              </dd>{" "}
              <dfn>
                This can be set as follows e.g.{" "}
                <p>
                  {" "}
                  <code>
                    name="author", <br />
                    content="Bramwell Brooks";{" "}
                  </code>{" "}
                </p>{" "}
              </dfn>{" "}
            </li>{" "}
          </ul>{" "}
        </section>
      </div>

      <div className="container_2">
        {" "}
        <aside>
          {" "}
          <div className="meta_item_1">
            <section>
              <h2>Meta Data.</h2>{" "}
              <p>
                The <dfn>Meta Data</dfn> of an HTML document is stored using the
                &lt;meta&gt; tag within the &lt;head&gt; tag.{" "}
              </p>{" "}
              <p>
                Meta Data is data which is contained within a website, but which
                doesn't affect the appearance of webpages.{" "}
              </p>{" "}
              <p>
                However, the attributes associated with Meta data are especially
                important with regards to Search Engine Optimisation (S.E.O).{" "}
              </p>{" "}
              <p>
                Some of the common properties specified in Meta data include
                author, document author, expiry date.{" "}
              </p>{" "}
            </section>{" "}
          </div>
          <div className="meta_item_2">
            <section>
              <h2>Cookies.</h2>
              <p>
                Data is stored in small text files called <dfn>'cookies'</dfn> -
                which help facilitate communication between the client and web
                servers.
              </p>
              <p>
                These are typically used to keep track of a session and the
                specific needs of clients.
              </p>
              <p>
                They can also be used to track and extract user activity and
                other information.
              </p>
              <p>
                Cookies which don't specify an expiry date, expire as soon as
                the session has ended.
              </p>
              <p>Mmmm...</p>
            </section>
          </div>
          <div className="meta_item_3">
            <img
              src={cookie_monster}
              alt="Cookie Monster from 1970s TV show, Sesame Street."
            />
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Meta;

// remember the meta tag doesn't have a closing tag
// need to go back and reposition all the images with flexbox / responsive
