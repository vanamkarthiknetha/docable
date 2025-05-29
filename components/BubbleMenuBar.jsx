import { BubbleMenu } from '@tiptap/react'

const BubbleMenuBar = ({ editor }) => {
  if (!editor) {
    return null
  }

  return (
      <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
        <div className="flex gap-2 bg-black  rounded-md border border-white/30  p-2 ">
          <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-2 font-bold ${editor.isActive('bold') ? 'bg-white/10 rounded' : ''}`}
          title="Bold"
          disabled={editor.isActive('code')}
        >B</button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()} 
          className={`px-2 italic ${editor.isActive('italic') ? 'italic bg-white/10 rounded' : ''}`}
          title="Italic"
          disabled={editor.isActive('code')}

        >I</button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={`px-2 ${editor.isActive('code') ? 'bg-white/10 rounded' : ''}`}
          title="Code"
        >{'</>'}</button>
        <select
          className="px-2 rounded bg-black text-white border border-white/20"
          value={
            editor.isActive('heading', { level: 1 }) ? 'h1' :
            editor.isActive('heading', { level: 2 }) ? 'h2' :
            editor.isActive('heading', { level: 3 }) ? 'h3' :
            'text'
          }
          onChange={e => {
            const value = e.target.value;
            if (value === 'text') {
              editor.chain().focus().setParagraph().run();
            } else if (value === 'h1') {
              editor.chain().focus().toggleHeading({ level: 1 }).run();
            } else if (value === 'h2') {
              editor.chain().focus().toggleHeading({ level: 2 }).run();
            } else if (value === 'h3') {
              editor.chain().focus().toggleHeading({ level: 3 }).run();
            }
          }}
          title="Text/Heading"
        >
          <option value="text">Text</option>
          <option value="h1">Heading 1</option>
          <option value="h2">Heading 2</option>
          <option value="h3">Heading 3</option>
        </select>
        </div>
      </BubbleMenu>
  );
};

export default BubbleMenuBar;
