"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import BubbleMenuBar from "./BubbleMenuBar";
import MenuBar from "./MenuBar";
import { Markdown } from "tiptap-markdown";

import {
  Slash,
  SlashCmd,
  SlashCmdProvider,
  enableKeyboardNavigation,
} from "@harshtalks/slash-tiptap";
import { suggestions } from "@/constants";


const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Slash.configure({
        suggestion: {
          items: () => suggestions,
        },
      }),
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
      handleDOMEvents: {
        keydown: (_, v) => enableKeyboardNavigation(v),
      },
      attributes: {
        class: "p-4 focus:outline-none",
      },
    },
  });

  return (
    <div className="w-full">
      <MenuBar editor={editor} />
      <SlashCmdProvider>
        <EditorContent editor={editor} />
        <SlashCmd.Root editor={editor}>
          <SlashCmd.Cmd>
            <SlashCmd.Empty>No commands available</SlashCmd.Empty>
            <SlashCmd.List className="bg-black rounded-md border border-white/30 p-2">
              {suggestions.map((item) => {
                return (
                  <SlashCmd.Item
                  className="cursor-pointer hover:bg-white/30 rounded-md p-1"
                    value={item.title}
                    onCommand={(val) => {
                      item.command(val);
                    }}
                    key={item.title}
                  >
                    <p>{item.title}</p>
                  </SlashCmd.Item>
                );
              })}
            </SlashCmd.List>
          </SlashCmd.Cmd>
        </SlashCmd.Root>
      </SlashCmdProvider>
      <BubbleMenuBar editor={editor} />
    </div>
  );
};

export default Editor;
