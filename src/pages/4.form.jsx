import React from "react";

const Form = () => {
  return (
    <div className="form-container">
      <main>
        <section>
          <h2>Form.</h2>
          <form autocomplete="off">
            <fieldset className="flex_container">
              {/* ********************* FLEX ITEM ONE ********************* */}
              <div className="flex_item_1">
                {" "}
                <p>
                  <input
                    autocomplete="off"
                    type="text"
                    name="name"
                    autofocus
                    required
                    placeholder="Name"
                  ></input>
                </p>
                <p>
                  <input
                    type="text"
                    t31ype="text"
                    name="phone"
                    required
                    placeholder="Telephone"
                    autocomplete="off"
                  ></input>
                </p>
                <p>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    autocomplete="off"
                  ></input>
                </p>
                <p>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Subject"
                    autocomplete="off"
                  ></input>
                </p>{" "}
              </div>
              <div className="flex_item_2">
                {" "}
                {/* ********************* FLEX ITEM TWO ********************* */}
                <p>
                  <textarea placeholder="Form is not yet functional. Next steps will be to connect form up with PHP, then add further UX / validation improvements. "></textarea>
                </p>
                <div className="button_container">
                  {" "}
                  <button>Send Message</button>
                </div>
              </div>{" "}
            </fieldset>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Form;
