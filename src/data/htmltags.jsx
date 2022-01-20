const htmlTagData = [
  { id: 1, tag: "a", meaning: "Anchor", used: "Yes" },
  { id: 2, tag: "abbr", meaning: "Abbreviation", used: "Yes" },
  { id: 3, tag: "address", meaning: "Address", used: "Yes" },
  { id: 4, tag: "area", meaning: "Area", used: "No" },
  { id: 5, tag: "article", meaning: "Article", used: "Yes" },
  { id: 6, tag: "aside", meaning: "Aside", used: "Yes" },
  { id: 7, tag: "audio", meaning: "Audio", used: "Yes" },
  { id: 7.5, tag: "b", meaning: "Bold", used: "Yes" },
  {
    id: 7.8,
    tag: "base",
    meaning: "Specifies a base pathname for all relative URLs",
    used: "Yes",
  },

  { id: 8, tag: "bdi", meaning: "Bidirectional isolation", used: "Yes" },
  { id: 9, tag: "bdo", meaning: "Bidirectional override", used: "Yes" },
  { id: 10, tag: "blockquote", meaning: "Block quotation", used: "Yes" },
  { id: 11, tag: "body", meaning: "Body", used: "Yes" },
  { id: 12, tag: "br", meaning: "Line Break", used: "Yes" },
  { id: 13, tag: "button", meaning: "Button", used: "Yes" },
  { id: 14, tag: "canvas", meaning: "Canvas", used: "No" },
  { id: 15, tag: "caption", meaning: "Table Caption", used: "Yes" },
  { id: 16, tag: "cite", meaning: "Citation", used: "Yes" },
  { id: 17, tag: "code", meaning: "Code", used: "Yes" },
  { id: 18, tag: "col", meaning: "Table Column", used: "Yes" },
  { id: 19, tag: "colgroup", meaning: "Column Group", used: "Yes" },
  // { id: 20, tag: "command", meaning: "Command", used: "No" },
  { id: 21, tag: "<!-- . . . -->", meaning: "Comments", used: "Yes" },
  {
    id: 22,
    tag: "data",
    meaning:
      "Provides a machine-readable equivalent for listed content, using the 'value' attribute.",
    used: "No",
  },
  {
    id: 23,
    tag: "datalist",
    meaning:
      "Unconnected to the <data> tag. Used with a 'input' control, this element creates drop-down menu of predefined suggestions, using the <optional> element.",
    used: "No",
  },
  { id: 24, tag: "dd", meaning: "Description Definition", used: "Yes" },
  { id: 25, tag: "del", meaning: "Deleted Text", used: "Yes" },
  {
    id: 26,
    tag: "details",
    meaning:
      "A disclosure widget (that can be toggled open and close) that reveals additional information or controls. May also contain a <summary> element.",
    used: "Yes",
  },
  { id: 27, tag: "dfn", meaning: "Definition", used: "Yes" },
  { id: 28, tag: "dialogue", meaning: "A floating dialogue box.", used: "No" },
  { id: 29, tag: "div", meaning: "Division element", used: "Yes" },
  { id: 30, tag: "dl", meaning: "Description list", used: "Yes" },
  {
    id: 31,
    tag: "dt",
    meaning: "Name portion within a description list",
    used: "Yes",
  },
  { id: 32, tag: "em", meaning: "Emphasised text", used: "Yes" },
  {
    id: 33,
    tag: "embed",
    meaning: "Embeds an object into a page.",
    used: "No",
  },
  {
    id: 34,
    tag: "fieldset",
    meaning: "A group of elements in a form.",
    used: "Yes",
  },
  {
    id: 35,
    tag: "figcaption",
    meaning: "A caption for the <figure> element.",
    used: "No",
  },
  {
    id: 36,
    tag: "figure",
    meaning:
      "Self-contained content referred to in the main content such as illustrations, charts, code examples, diagrams and poems",
    used: "No",
  },
  {
    id: 37,
    tag: "footer",
    meaning: "And the foot element of the main webpage",
    used: "Yes",
  },
  {
    id: 38,
    tag: "h1, h2, h3, h4, h5, h6",
    meaning: "Heading tags",
    used: "Yes",
  },
  {
    id: 39,
    tag: "head",
    meaning: "Head element (contains Meta Data).",
    used: "Yes",
  },
  {
    id: 40,
    tag: "header",
    meaning: "Header element of main webpage.",
    used: "Yes",
  },
  // { id: 41, tag: "hgroup", meaning: "A way of grouping h tags", used: "No" },
  { id: 42, tag: "hr", meaning: "Paragraph level thematic break", used: "Yes" },
  { id: 43, tag: "HTML", meaning: "HTML root element.", used: "Yes" },
  { id: 44, tag: "i", meaning: "Italic text", used: "Yes" },
  {
    id: 45,
    tag: "iframe",
    meaning:
      "Defines an in-line frame that is used for embedding an HTML document",
    used: "No",
  },
  { id: 46, tag: "img", meaning: "Image", used: "Yes" },
  { id: 47, tag: "input", meaning: "The input element of a form", used: "Yes" },
  {
    id: 48,
    tag: "ins",
    meaning: "Indicates text that has been inserted",
    used: "Yes",
  },
  {
    id: 49,
    tag: "kbd",
    meaning:
      "Stands for keyboard, refers to example text or keys entered by the user",
    used: "Yes",
  },
  // {
  //   id: 50,
  //   tag: "keygen",
  //   meaning:
  //     "Used as part of a form to generate key pairs that are used in web-based certificate management systems (for secure transactions)",
  //   used: "No",
  // },
  { id: 51, tag: "label", meaning: "Label for a section on form", used: "Yes" },
  {
    id: 52,
    tag: "legend",
    meaning: "Assigns a caption to a fieldset as part of a form",
    used: "Yes",
  },
  { id: 53, tag: "li", meaning: "List item", used: "Yes" },
  {
    id: 54,
    tag: "link",
    meaning:
      "Links web documents together, most often used to link to an external stylesheet",
    used: "Yes",
  },
  {
    id: 55,
    tag: "main",
    meaning: "The main section of a webpage",
    used: "Yes",
  },
  {
    id: 56,
    tag: "map",
    meaning: "Specifies a client side image map",
    used: "No",
  },
  {
    id: 57,
    tag: "mark",
    meaning: "Represents marked text, highlighted for reference purposes",
    used: "Yes",
  },
  {
    id: 58,
    tag: "menu",
    meaning:
      "A list of interactive options or commands such as a menu of options in a web application. This is a semantic alternative to the <ul> tag. Each item contained within the menu represent a link or command the user can activate. Previously contained <command> and then <menuitem> tags, but these are no longer recommended / supported. Items within a menu should now use the <li> tag.",
    used: "No",
  },
  // {
  //   id: 59,
  //   tag: "menuitem",
  //   meaning: "Represents a command that can be chosen from a pop-up menu",
  //   used: "No",
  // },
  {
    id: 60,
    tag: "meta",
    meaning: "Element containing the Meta Data",
    used: "Yes",
  },
  {
    id: 61,
    tag: "meter",
    meaning: "Represents a fractional value",
    used: "Yes",
  },
  { id: 62, tag: "nav", meaning: "Navigation", used: "Yes" },
  {
    id: 63,
    tag: "noscript",
    meaning: "Provides alternative context when script cannot be executed,",
    used: "Yes",
  },
  {
    id: 64,
    tag: "object",
    meaning: "A generic element used for embedding an external resource",
    used: "No",
  },

  { id: 65, tag: "ol", meaning: "Ordered list", used: "Yes" },
  {
    id: 66,
    tag: "optgroup",
    meaning:
      "Defines logical group of option elements within a select menu form control",
    used: "Yes",
  },
  {
    id: 67,
    tag: "option",
    meaning: "Defines an option within a <select> or <datalist> elements",
    used: "Yes",
  },
  {
    id: 68,
    tag: "output",
    meaning:
      "Represents the result of a calculation, most likely the outputs of a script.",
    used: "Yes",
  },
  { id: 69, tag: "p", meaning: "Paragraph", used: "Yes" },
  {
    id: 70,
    tag: "param",
    meaning: "Supplies parameter within an object element",
    used: "Yes",
  },
  {
    id: 71,
    tag: "pre",
    meaning:
      "Preformatted text - keeps the formatting of an input, e.g. including any whitespace",
    used: "No",
  },
  {
    id: 72,
    tag: "progress",
    meaning:
      "Represents the completion progress, of the tasks such as downloading",
    used: "No",
  },
  { id: 73, tag: "q", meaning: "Quotation", used: "Yes" },
  {
    id: 74,
    tag: "rp",
    meaning: "Used within the Ruby element, to provide parentheses around Ruby",
    used: "No",
  },
  {
    id: 75,
    tag: "rt",
    meaning: "Provides the Ruby text in Ruby annotations",
    used: "No",
  },
  {
    id: 75.1,
    tag: "ruby",
    meaning:
      "Represents a run of text marked with Ruby annotations, primarily used in East Asian typography. ",
    used: "No",
  },
  { id: 76, tag: "s", meaning: "Strikethrough text", used: "Yes" },
  {
    id: 77,
    tag: "samp",
    meaning: "Indicate sample output from programs and scripts",
    used: "Yes",
  },
  {
    id: 78,
    tag: "script",
    meaning:
      "Places a script in the document, usually JavaScript. Used to import 'Font Awesome' icons on this site",
    used: "Yes",
  },
  {
    id: 79,
    tag: "section",
    meaning: "Represents a section, thematic grouping of content",
    used: "Yes",
  },
  {
    id: 80,
    tag: "select",
    meaning: "Defined a multichoice menu or scrolling last",
    used: "Yes",
  },
  {
    id: 81,
    tag: "small",
    meaning: "Indicates an addendum or a side note the main text",
    used: "Yes",
  },
  {
    id: 82,
    tag: "span",
    meaning:
      "Identifies a generic in-line element - like an in-line version of a div tag ",
    used: "Yes",
  },
  {
    id: 83,
    tag: "strong",
    meaning:
      "Indicates a word or phrase is important requiring extra attention - typically displayed as bold text",
    used: "Yes",
  },
  {
    id: 84,
    tag: "style",
    meaning:
      "Inserts CSS into the document. Not used in this project - styles imported using the 'import' keyword React.js",
    used: "n/a",
  },
  {
    id: 85,
    tag: "sub",
    meaning: "Formats enclosed text as subscript",
    used: "Yes",
  },
  {
    id: 86,
    tag: "summary",
    meaning:
      "Provide summary, caption or legend from its parent details element. Often used within a <detail> element which can be toggled to open and close.",
    used: "Yes",
  },
  {
    id: 87,
    tag: "sup",
    meaning: "Formats enclose text as superscript",
    used: "Yes",
  },
  {
    id: 88,
    tag: "table",
    meaning:
      "Indicates table used for displaying rows and columns of data or information",
    used: "Yes",
  },
  {
    id: 89,
    tag: "tbody",
    meaning: "Defines row or group of rows as the body of the table",
    used: "Yes",
  },
  { id: 90, tag: "td", meaning: "Defines a table data cell.", used: "Yes" },
  {
    id: 91,
    tag: "textarea",
    meaning: "Defines a multi-line text entry control",
    used: "Yes",
  },
  { id: 92, tag: "tfoot", meaning: "Defines a table footer", used: "No" },
  { id: 93, tag: "th", meaning: "Defined a table header cell", used: "Yes" },
  {
    id: 94,
    tag: "thead",
    meaning: "Defines a block of rows that consist of the labels for the table",
    used: "Yes",
  },
  {
    id: 95,
    tag: "time",
    meaning:
      "Represents a time on a 24-hour clock or date on the Gregorian calendar",
    used: "Yes",
  },
  {
    id: 96,
    tag: "title",
    meaning: "Required - specifies the title of the HTML document",
    used: "Yes",
  },
  {
    id: 97,
    tag: "tr",
    meaning: "Defines a row of cells within a table",
    used: "Yes",
  },
  {
    id: 98,
    tag: "track",
    meaning:
      "Specifies an external resource (text or audio), that is timed with a video or audio media file, that improves accessibility or enhances navigation.",
    // A dummy track has been used for now, need to revisit this and investigate further.
    used: "Yes",
  },
  {
    id: 99,
    tag: "u",
    meaning: "Enclosed text is underlined for semantic purposes",
    used: "Yes",
  },
  { id: 100, tag: "ul", meaning: "Defines an un-ordered list", used: "Yes" },
  {
    id: 101,
    tag: "var",
    meaning: "Indicates an instance of a variable or program argument",
    used: "Yes",
  },
  {
    id: 102,
    tag: "video",
    meaning: "Embeds a video file on the web page",
    used: "Yes",
  },
  {
    id: 103,
    tag: "wbr",
    meaning:
      "Represents a line break opportunity within a word. The line will only break at the location of the element if it needs to",
    used: "Yes",
  },
];

export default htmlTagData;
