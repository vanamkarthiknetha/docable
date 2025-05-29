const { createSuggestionsItems } = require("@harshtalks/slash-tiptap");

const suggestions = createSuggestionsItems([
    {
      title: "Heading 1",
      searchTerms: ["h1", "heading", "title"],
      command: ({ editor, range }) => {
        editor
          .chain()
          .focus()
          .deleteRange(range)
          .toggleHeading({ level: 1 })
          .run();
      },
    },
    {
      title: "Heading 2",
      searchTerms: ["h2", "heading", "subtitle"],
      command: ({ editor, range }) => {
        editor
          .chain()
          .focus()
          .deleteRange(range)
          .toggleHeading({ level: 2 })
          .run();
      },
    },
    {
      title: "Heading 3",
      searchTerms: ["h3", "heading", "subtitle"],
      command: ({ editor, range }) => {
        editor
          .chain()
          .focus()
          .deleteRange(range)
          .toggleHeading({ level: 3 })
          .run();
      },
    },
    {
      title: "Paragraph",
      searchTerms: ["text", "normal"],
      command: ({ editor, range }) => {
        editor
          .chain()
          .focus()
          .deleteRange(range)
          .setParagraph()
          .run();
      },
    },
    {
      title: "Bullet List",
      searchTerms: ["unordered", "point"],
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).toggleBulletList().run();
      },
    },
  ]);

module.exports = {suggestions}