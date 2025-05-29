"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import BubbleMenuBar from "./BubbleMenuBar";
import MenuBar from "./MenuBar";
import { Markdown } from "tiptap-markdown";
import SlashCommandMenu from "./SlashCommandMenu";
import { useState, useRef } from "react";

const Editor = () => {
  const [slashPos, setSlashPos] = useState(null);
  const menuRef = useRef();
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Type / for commands...",
        emptyEditorClass: "is-editor-empty",
      }),
      Markdown.configure({
        html: true,
        tightLists: true,
        bulletListMarker: "-",
        linkify: false,
        breaks: false,
        transformPastedText: false,
        transformCopiedText: false,
      }),
    ],
    content: "",
    editorProps: {
      handleKeyDown(view, event) {
        if (event.key === "/") {
          const { from } = view.state.selection;
          setTimeout(() => {
            const coords = view.coordsAtPos(from);
            setSlashPos({ from, to: from + 1, coords });
            console.log("slapos",from,from + 1,coords)
          }, 0);
          
        }else
        setSlashPos(null);

        return false;
      },
      attributes: {
        class: "p-4 focus:outline-none",
      },
    },
  });

  return (
    <div className="w-full">
      <MenuBar editor={editor} />
      <div className="relative">
      <EditorContent editor={editor} />
      <BubbleMenuBar editor={editor} />
      {slashPos && (
        <SlashCommandMenu
          editor={editor}
          slashPos={slashPos}
          setSlashPos={setSlashPos}
        />
      )}
      </div>
    </div>
  );
};

export default Editor;
