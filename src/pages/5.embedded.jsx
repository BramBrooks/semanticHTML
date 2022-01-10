import React from "react";
import spectroscope from "../media/audio/spectroscope.mp3";
import twosides from "../media/audio/twosides.mp3";
import lostworld from "../media/audio/lostworld.mp3";
import videofile from "../media/video/AKA.mp4";

import image_1 from "../media/images/image_1.jpeg";
import image_2 from "../media/images/image_2.jpeg";
import image_3 from "../media/images/image_3.jpeg";
import image_4 from "../media/images/image_4.jpeg";
import image_5 from "../media/images/image_5.jpeg";
import image_6 from "../media/images/image_6.jpeg";
import image_7 from "../media/images/image_7.jpeg";
import image_8 from "../media/images/image_8.jpeg";

document.addEventListener(
  "play",
  function (e) {
    // get all <audio> tag elements in the page.
    var allAudios = document.getElementsByTagName("audio");
    // Iterate through all players and pause them, except for
    // the one who fired the "play" event ("target")
    for (var i = 0; i < allAudios.length; i++) {
      if (allAudios[i] != e.target) {
        allAudios[i].pause();
      }
    }
  },
  true
);

const Embedded = () => {
  return (
    <div className="embedded_container">
      <main>
        <section>
          <h2>Embedded Content.</h2>
          <div className="embedded_txt">
            <p>
              As well as training as a web / software developer, I've always
              enjoyed various other creative pursuits, including music
              production, photography, and bits of graphic design / video
              production work.
              <br />
              <br />
              I've included a couple of bits of work I've been involved in
              below, for the purposes of demonstrating the use of HTML tags.
            </p>
          </div>
        </section>

        <section>
          <h2>Music</h2>
          <div className="audio_flex_container">
            <div className="spectro_1">
              <h3>Track: Two Sides</h3>
              <audio src={twosides} autoplay controls preload="auto"></audio>
              <details>
                <summary>Info</summary>
                <ul>
                  <li>
                    Here is a track I produced a number of years ago, while I
                    was experimenting with reverb and digital delay effects.
                  </li>
                  <li>
                    The bass guitar you can hear was actually recorded as part
                    of a live performance session, but I cut a loop from the
                    original recording, and reversed it - given it quite a
                    mysterious and atmospheric sound to match the beats and
                    other sounds.
                  </li>
                  <li>Hope you enjoy it!</li>
                </ul>
              </details>
            </div>
            <div className="spectro_1">
              <h3>Title: Lost World</h3>
              <audio src={lostworld} autoplay controls preload="auto"></audio>
              <details>
                <summary>Info</summary>
                <ul>
                  <li>
                    Here is a track I produced a number of years ago, while I
                    was experimenting with reverb and digital delay effects.
                  </li>
                  <li>
                    The bass guitar you can hear was actually recorded as part
                    of a live performance session, but I cut a loop from the
                    original recording, and reversed it - given it quite a
                    mysterious and atmospheric sound to match the beats and
                    other sounds.
                  </li>
                  <li>Hope you enjoy it!</li>
                </ul>
              </details>
            </div>
            <div className="spectro_1">
              <h3>Title: Spectroscope</h3>
              <audio
                src={spectroscope}
                autoplay
                controls
                preload="auto"
              ></audio>
              <details>
                <summary>Info</summary>
                <ul>
                  <li>
                    Here is a track I produced a number of years ago, while I
                    was experimenting with reverb and digital delay effects.
                  </li>
                  <li>
                    The bass guitar you can hear was actually recorded as part
                    of a live performance session, but I cut a loop from the
                    original recording, and reversed it - given it quite a
                    mysterious and atmospheric sound to match the beats and
                    other sounds.
                  </li>
                  <li>Hope you enjoy it!</li>
                </ul>
              </details>
            </div>
          </div>
        </section>

        <section>
          <h2>Video</h2>
          <div className="spectro_1">
            <div className="video_flex_container">
              {/* <h3>Track: Two Sides</h3>{" "} */}
              <video src={videofile} controls type="video/mp4">
                <track
                  kind="subtitles"
                  src="blockbuster.en.vtt"
                  srcLang="en"
                  label="English"
                />
                <track
                  kind="subtitles"
                  src="blockbuster.de.vtt"
                  srcLang="de"
                  label="Deutsch"
                />
                This browser does not support the<code>video</code>element.
              </video>
              {/* <details>
                <summary>Info</summary>
                <ul>
                  <li>Interesting Fact One</li>
                  <li>Interesting Fact Two</li>
                  <li>Interesting Fact Three</li>
                  <li>Interesting Fact Four</li>
                </ul>
              </details> */}
            </div>
          </div>

          {/* <div className="summary_flex_container"></div> */}
        </section>
        <section>
          <div className="photography_container">
            <h2>Photography</h2>
            <ul>
              <li>
                <img src={image_1} alt="Fleetwood beach" />
              </li>
              <li>
                <img src={image_2} alt="Fleetwood beach" />
              </li>
              <li>
                <img src={image_3} alt="Fleetwood beach" />
              </li>
              <li>
                <img src={image_4} alt="Fleetwood beach" />
              </li>
              <li>
                <img src={image_5} alt="Fleetwood beach" />
              </li>
              <li>
                <img src={image_6} alt="Fleetwood beach" />
              </li>
              <li>
                <img src={image_7} alt="Fleetwood beach" />
              </li>
              <li>
                <img src={image_8} alt="Fleetwood beach" />
              </li>
              <li>
                <img src={image_1} alt="Fleetwood beach" />
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Embedded;

// add alternative audio options to the MP3
// add alternative video options and explore the preload options
// Track tag is used for bringing in subtitles, captions, descriptions, chapters, and Meta data.
// Will be good to experiment with this to try and get it working.

{
  /* Need to spend spent more time6 figuring out objects and embed */
}
{
  /* <object> */
}
{
  /* also need to look into the use of param */
}
{
  /* <param name="foo" value="bar"></param>
              <embed
                // type="flash"
                type="video/webm"
                src={videofile}
                width="250"
                height="200"
                autoplay="off"
              ></embed>
            </object> */
}
