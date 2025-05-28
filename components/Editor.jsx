"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import BubbleMenuBar from "./BubbleMenuBar";

const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Type something here...",
        emptyEditorClass: "is-editor-empty",
      }),
    ],
    content: "",
    editorProps: {
      attributes: {
        class: "p-4 focus:outline-none",
      },
    },
  });

  return (
    <>
      <style jsx global>{`
        .is-editor-empty:first-child::before {
          color: rgba(255, 255, 255, 0.2);
          content: attr(data-placeholder);
          float: left;
          height: 0;
          pointer-events: none;
        }
        .ProseMirror code {
          background-color: rgba(255, 255, 255, 0.1);
          padding: 0.2em 0.4em;
          border-radius: 0.25em;
          font-family: monospace;
        }
      `}</style>
      <EditorContent editor={editor} />
      {editor && <BubbleMenuBar editor={editor} />}
    </>
  );
};

export default Editor;
