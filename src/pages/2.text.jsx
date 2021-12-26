import React from "react";
import ArticlePanel from "../components/article_panel.jsx";

const Text = () => {
  return (
    <div className="textPageContainer">
      <main className="textPage">
        <div className="textPage_container1">
          <div className="section">
            <section>
              <h2>Text Elements.</h2>
              <p>
                This is a <span className="red_paragraph">paragraph</span>.
              </p>
              <p>
                This paragraph contains an <i>italic</i> word.
              </p>
              <p>
                This paragraph contains an <em>emphasised</em> word -
                semantically better than <i>italic</i>.
              </p>
              <p>
                This paragraph contains a <b>bold</b> word.
              </p>
              <p>
                This paragraph contains a <strong>strong</strong> word -
                semantically better than <b>bold</b>.
              </p>
              <p>
                Below this paragraph is an address: <br />
                <br /> <address>221b Baker Street, London. </address>
              </p>
              <p>
                {" "}
                <a
                  href="https://soundcloud.com/lostscientists"
                  target="_blank"
                  rel="noreferrer"
                >
                  This is a link
                </a>
                &nbsp;from an anchor tag. Go on, click it. You know you want to.
              </p>

              <p>
                This paragraph contains a strongly formatted superscript:{" "}
                <strong>
                  x<sup>2</sup>
                </strong>
                .
              </p>
              <p>
                This paragraph contains a strongly formatted subscript:{" "}
                <strong>
                  H<sub>2</sub>O
                </strong>
                .
              </p>
              <p>
                This paragraph indicates that some of the text&nbsp;
                <del>has been deleted</del> &nbsp;(possibly in suspicious
                circumstances).
              </p>
              <p>
                This paragraph contains an abbreviation: The{" "}
                <abbr title="The World Health Organization">W.H.O</abbr> was
                founded in 1940. Hover over the abbreviation to find out more.
              </p>
              <p>
                This paragraph contains a citation: <cite>'Revolver'</cite> by
                The Beatles.
              </p>
              <p>
                This paragraph contains a quote:&nbsp;
                <q>
                  "It's never too late to be everything you ever wanted to be."
                </q>
              </p>
              <p>
                This paragraph contains a blockquote:
                <br />
                <br />
                <blockquote cite="http://www.worldwildlife.org/who/index.html">
                  "For 50 years, WWF has been protecting the future of nature.
                  The world's leading conservation organization, WWF works in
                  100 countries and is supported by 1.2 million members in the
                  United States and close to 5 million globally."
                </blockquote>
              </p>
              <p>
                This paragraph contains a time element:&nbsp;
                <br />
                <br />
                <time dateTime="2021-11-12T20:00-05:00">
                  November 12, 2021, 8pm EST.
                </time>
              </p>
              <p>
                This paragraph contain some code: <br />
                <br />
                <code>console.log("Hello World!!!");</code>
              </p>

              <p>
                This paragraph contains a word break opportunity : &nbsp;
                <em>
                  supercali
                  <wbr />
                  fragilistic
                  <wbr />
                  expialidocious.
                </em>
              </p>
              <p>
                This paragraph contains a word which is formatted by a span tag
                :&nbsp;
                <span>Hello!</span>{" "}
              </p>
              <p>
                This paragraphs contains a <small>small</small> word - normally
                used for legal "small print".
              </p>
              <p>
                This paragraph contains a word which has been isolated - because
                it's text direction might be different to the other text around
                it:&nbsp;
                <bdi dir="rtl">sdrawkcab</bdi>
              </p>
              <p>
                This paragraph contains the word "backwards" which has been
                reversed:&nbsp;
                <bdo dir="rtl">backwards</bdo>
              </p>
              <p>
                This paragraph contains a word which has been{" "}
                <mark>marked</mark>
              </p>
              <p>
                This paragraph contains sample output:{" "}
                <samp>Error 404 - Page Not Found</samp>{" "}
              </p>

              <p>
                This paragraph contains a keyboard suggestion: <kbd>Ctrl</kbd>
                &nbsp;+&nbsp;<kbd>Alt</kbd>&nbsp;+&nbsp;
                <kbd>Delete</kbd>{" "}
              </p>

              <p>
                This paragraph contains a variable: &nbsp;
                <code>
                  <var>myString</var> = 'hello world';
                </code>
              </p>
            </section>
          </div>
        </div>

        <div className="textPage_container2">
          <ArticlePanel />
        </div>
      </main>
    </div>
  );
};

export default Text;
