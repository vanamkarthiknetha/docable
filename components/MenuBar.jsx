import { Editor } from "@tiptap/react";
import ExportMarkdown from "./ExportMarkdown";

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex gap-1 mb-4 p-2 bg-black rounded-md border border-white/30 w-full justify-between">
      <div className="">
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={`px-2 ${
            editor.isActive("heading", { level: 1 })
              ? "bg-white/10 rounded"
              : ""
          }`}
          title="Heading 1"
        >
          H1
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={`px-2 ${
            editor.isActive("heading", { level: 2 })
              ? "bg-white/10 rounded"
              : ""
          }`}
          title="Heading 2"
        >
          H2
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={`px-2 ${
            editor.isActive("heading", { level: 3 })
              ? "bg-white/10 rounded"
              : ""
          }`}
          title="Heading 3"
        >
          H3
        </button>
        <button
          onClick={() =>
            editor.chain().focus().setParagraph().run()
          }
          className={`px-2 ${
            editor.isActive("paragraph")
              ? "bg-white/10 rounded"
              : ""
          }`}
          title="Paragraph"
        >
          Text
        </button>
      </div>
      <div className="flex gap-1">
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`px-2 ${
            editor.isActive("bulletList") ? "bg-white/10 rounded" : ""
          }`}
          title="Bullet List"
        >
          • List
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-2 font-bold ${
            editor.isActive("bold") ? "bg-white/10 rounded" : ""
          }`}
          title="Bold"
          disabled={editor.isActive("code")}
        >
          B
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-2 italic ${
            editor.isActive("italic") ? "italic bg-white/10 rounded" : ""
          }`}
          title="Italic"
          disabled={editor.isActive("code")}
        >
          I
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={`px-2 ${
            editor.isActive("code") ? "bg-white/10 rounded" : ""
          }`}
          title="Code"
        >
          {"</>"}
        </button>
      </div>
      <div className="flex items-center">
      <ExportMarkdown editor={editor}/>

      </div>
    </div>
  );
};

export default MenuBar;
