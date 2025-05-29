"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import BubbleMenuBar from "./BubbleMenuBar";
import MenuBar from "./MenuBar";
import { Markdown } from 'tiptap-markdown'
import ExportMarkdown from "./ExportMarkdown";

const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Type something here...",
        emptyEditorClass: "is-editor-empty",
      }),
      Markdown.configure({
        html: true,
        tightLists: true,
        bulletListMarker: '-',
        linkify: false,
        breaks: false,
        transformPastedText: false,
        transformCopiedText: false,
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
    <div className="w-full">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
      <BubbleMenuBar editor={editor} />
    </div>
  );
};

export default Editor;
