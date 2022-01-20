import React from "react";

function Home(props) {
  const result = props.result;

  return (
    <div
      className={
        result ? "home_page_container_inactive" : "home_page_container"
      }
    >
      <main>
        <div className="flex_item_1">
          <section>
            <h2>Welcome</h2>
            <p>Hi there !</p>
            <p>
              As part of my learning and development, I wanted to become more
              familiar with each HTML element…
            </p>
            <p>... so I decided to create a site which uses all of them.</p>
            <p>
              {" "}
              So far I've included&nbsp;
              <span>81%</span>&nbsp;of HTML tags in this site.
            </p>
            <p>
              HTML gives structure to webpages, but &nbsp;
              <dfn>Semantic HTML</dfn>&nbsp;is also important for two reasons:
            </p>
            <br />
            <ol>
              <li>
                <strong>Accessibility</strong>
              </li>
              <li>
                <strong>Search Engine Optimisation</strong>.
              </li>
            </ol>
          </section>

          <section>
            {" "}
            <h2>Accessibility</h2>
            <p>
              People who are visually impaired have the option of using&nbsp;
              <dfn>Screen Reader</dfn>&nbsp;software to help make sense of
              websites and improve their accessibility to the web.
            </p>
            <p>
              Screen Readers are driven by HTML tags, which help describe to the
              user everything happening on screen.
            </p>
            <p>
              So if a site has been built badly in terms of Semantic HTML, it
              makes it far more difficult to navigate, causing additional and
              unnecessary barriers to accessibility.
            </p>
            <p>
              Screen Readers also aren't able to read text displayed in the form
              of image files - another important consideration when developing
              new sites and features.
            </p>
          </section>
          <section>
            <h2>Search Engine Optimisation</h2>
            <p>
              There are a number of ways to boost Search Engine rankings -{" "}
              <dfn>Search Engine Optimisation</dfn> (SEO) - but the first thing
              to get right is using Semantic HTML correctly.
            </p>
            <p>
              Search Engines use algorithms to scan websites for matches, and
              part of this is matching with sites built using the full range of
              HTML tags.
            </p>
            <p>
              So not only does Semantic HTML help improve accessibility, it
              means that people are more likely to discover a website in the
              first place - all the more reason to get it right.
            </p>
          </section>
        </div>
        <div className="flex_item_2">
          <aside>
            <div>
              <h2>Talon Voice</h2>
              <p>In May 2021 I tore a tendon in my right hand.</p>
              <p>
                Unable to use a keyboard, I started to explore the possibility
                of learning to code by speech.
              </p>
              <p>
                Thankfully I discovered <dfn>'Talon Voice'</dfn>.
              </p>
              <p>
                'Talon Voice' is a piece of fully customisable open-source
                software.
              </p>
              <p>
                It allows the user to replace keyboard commands with voice
                commands.
              </p>
              <p>
                For the best results, 'Talon Voice' needs voice recognition
                software to work alongside it.
              </p>
              <p>
                I'm currently using the <dfn>'Dragon Dictate'</dfn> voice
                engine.
              </p>
              <p>Around 80% of this project has been made using Talon Voice.</p>
              <div className="set_up_section">
                {" "}
                <h2>Setup</h2>
                <ul>
                  <li>Talon Voice 0.2.3</li>
                  <li>Dragon Dictate 4.0</li>

                  <li>
                    Audio Technica PRO-8 HEX Microphone (Headworn Hyper-Cardioid
                    Mic)
                  </li>
                  <li>Focusrite Scarlet 2i2 Audio Interface</li>
                  <li>Macbook Pro / Catalina 10.15.7</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default Home;
